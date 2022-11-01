import { Grid } from 'react-loader-spinner'
import style from './Loader.module.css'

export const Loader = () => {
    return <div className={style.loader}>
        <Grid
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
}