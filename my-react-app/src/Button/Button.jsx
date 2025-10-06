import styles from './Button.module.css'
//module styling helps prevent naming conflicts
//downsides: bit of additional setup plus global styles quite a work to apply

function Button(){
    return(
        <button className={styles.button}>I'm a module-styled button</button>
    );
}

export default Button