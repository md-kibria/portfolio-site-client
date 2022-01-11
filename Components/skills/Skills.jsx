import SkillItem from './skillItem/skillItem'
import styles from './Skills.module.scss'
import axios from 'axios'
import { useEffect, useReducer, useContext } from 'react'
import { BHContext } from '../../pages/_app'

// Initial State
const initialState = {
    skills: [],
    errors: {},
    isLoading: true
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_DATA':
            return {
                skills: action.payload.data,
                errors: {},
                isLoading: false
            }

        case 'ERROR':
            return {
                skills: [],
                errors: action.payload.errors,
                isLoading: false
            }

        default:
            state
    }
}

const Skills = () => {

    // Use Context
    const hostContext = useContext(BHContext)

    // Defind Use Reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    // Define Use State
    useEffect(async () => {
        try {
            // Hit the skills backend url
            let res = await axios.get('/skills')
            // If data found
            dispatch({
                type: 'LOAD_DATA',
                payload: {
                    data: res.data.allSkills
                }
            })
        } catch (error) {
            // If error occured
            dispatch({
                type: 'ERROR',
                payload: {
                    errors: error.response.data.errors
                }
            })
        }
    }, [])
    
    // If Loading
    if(state.isLoading) {
        return <h1 style={{textAlign: 'center', marginTop: '200px' }}>Loading...</h1>
    } 
    
    // If skill items found
    if (state.skills.length !== 0 ) {
    return (
        <div className={styles.skills}>
            {/* Skill Title */}
            <h2 className={styles.skills_title}><span>My</span> Skills</h2>

            {/* Skill Container */}
            <div className={styles.skills_container}>

                { state.skills.map(skill => (
                        // Skill Item
                        <SkillItem key={skill._id} img={`${hostContext}/uploads/${skill.img}`} title={skill.title} desc={skill.description} />
                    ))
                }

                {/* Html */}
                <SkillItem img="/img/html.png" title="Html" desc="" />

                {/* Css */}
                <SkillItem img="/img/css.png" title="Css" desc="" />

                {/* Js */}
                <SkillItem img="/img/js.png" title="JavaScript" desc="" />

                {/* React */}
                <SkillItem img="/img/react.png" title="React JS" desc="" />

                {/* Redux */}
                <SkillItem img="/img/redux.png" title="Redux" desc="" />

                {/* Sass */}
                <SkillItem img="/img/sass.png" title="Sass" desc="" />

                {/* Next */}
                <SkillItem img="/img/next.png" title="Next JS" desc="" />

                {/* Material UI */}
                <SkillItem img="/img/material-ui.png" title="Material UI" desc="" />

                {/* Bootstrap */}
                <SkillItem img="/img/bootstrap.png" title="Bootstrap" desc="" />

                {/* Express */}
                <SkillItem img="/img/expressjs.png" title="Express" desc="" />

                {/* NodeJS */}
                <SkillItem img="/img/nodejs.png" title="Node JS" desc="" />

                {/* MongoDB */}
                <SkillItem img="/img/mongodb.png" title="MongoDB" desc="" />
            </div>
        </div>
    ) } else if(state.errors) {
        console.log(state.errors)
        return state.errors.authentication && state.errors.authentication.msg
    }
}

export default Skills
