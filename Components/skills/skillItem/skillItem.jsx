import styles from './skillItem.module.scss'
import Image from 'next/image'

const SkillItem = ({img, title, desc}) => {
    return (
        <div className={styles.skillItem}>
            <Image src={img} alt={title} height={50} width={50} />

            <h3>{title}</h3>

            <p>{desc || "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem "}</p>
        </div>
    )
}

export default SkillItem
