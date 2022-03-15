import styles from './Contact.module.scss'
import { useEffect, useReducer, useRef } from 'react'
import axios from 'axios'
import { initialState, reducer } from './store'
import { useForm } from 'react-hook-form'

const Contact = ({ setContactOT }) => {

    const contactRef = useRef()

    // Use reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(async () => {
        try {
            const res = await axios.get('contact')

            dispatch({
                type: 'LOAD_CONTACT',
                payload: {
                    contactInfo: res.data.contactInfo
                }
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: {
                    errors: error.response.data.errors
                }
            })
        }
    }, [])

    useEffect(() => {
        setContactOT(contactRef.current.offsetTop)
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = async (data) => {
        try {
            // Send messege to server
            const res = await axios.post('messages/send/', data)
            // const res = await axios.get('messages/')

            dispatch({
                type: 'SEND_MSG',
                payload: {
                    msg: res.data.msg
                }
            })

            // reset(data)
            // console.log(data)
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: {
                    errors: error.response.data.errors
                }
            })
        }
    }

    return (
        <div className={styles.contact} ref={contactRef}>
            <h2 className={styles.contact_title}><span>Contact</span> Me</h2>
            {/* Contact Container */}
            <div className={styles.contact_container}>
                {/* Contact Message */}
                <form className={styles.contact_msg} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.msg_container}>
                        {state.msg && <h3 style={{ color: 'green', fontWeight: '300' }}>{state.msg}</h3>}
                        <div className={styles.name_email_section}>
                            <div className={styles.name_email}>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name..."
                                    {...register('name', { required: true })}
                                />
                                {errors.name && <span className={styles.formError}>This field is required</span>}
                                {state.errors.name && <span className={styles.formError}>{state.errors.name.msg}</span>}
                            </div>
                            <div className={styles.name_email}>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    placeholder="Your email..."
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <span className={styles.formError}>This field is required</span>}
                                {state.errors.email && <span className={styles.formError}>{state.errors.email.msg}</span>}
                            </div>
                        </div>
                        <div className={styles.body}>
                            <textarea
                                name="body"
                                id="body"
                                cols="30"
                                rows="10"
                                placeholder="Your message..."
                                {...register('body', { required: true })}
                            />
                            {errors.body && <span className={styles.formError}>This field is required</span>}
                            {state.errors.body && <span className={styles.formError}>{state.errors.body.msg}</span>}
                        </div>
                        <input type="submit" value="⇛" />
                    </div>
                </form>

                {/* Contact Address */}
                {!state.isLoading ? (
                    <div className={styles.contact_addr}>
                        <h3>Let's contact with me</h3>
                        <ul>
                            {state.contactInfo.address && (
                                <li>
                                    <i className="fa fa-map"></i> {state.contactInfo.address}
                                </li>
                            )}

                            {state.contactInfo.phone && (
                                <li>
                                    <i className="fa fa-phone"></i> {state.contactInfo.phone}
                                </li>
                            )}

                            {state.contactInfo.email && (
                                <li>
                                    <i className="fa fa-envelope"></i> {state.contactInfo.email}
                                </li>
                            )}
                        </ul>
                    </div>
                ) : (
                    <p>Loading....</p>
                )}

            </div>
        </div>
    )
}

export default Contact
