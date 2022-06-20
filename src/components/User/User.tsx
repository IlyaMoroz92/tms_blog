
import './User.scss'
import { useUserInfo } from '../../features/userInfo/useUserInfo'


type UserProps = {
    className?: string
    userName?: string
    text?: string
    abbr?: string
}
 
export const User = (props: UserProps) => {

    const { userInfo } = useUserInfo();
    console.log(userInfo);
    
    return (
        <div className='user'>
            <span className='user__abbr'>{userInfo?.username[0]} </span>
            <span className='user__name'>{userInfo?.username}</span>
        </div>
    )
}