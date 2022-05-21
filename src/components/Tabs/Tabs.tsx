import './Tabs.scss'
import { TitleNav } from "../../components/TitleNav";


type TabsProps = {
    className?: string
    image?: string
}

export const Tabs = (props: TabsProps) => {
    return (
        <div className='tabs__main'>
            <TitleNav  to='' text='All' className='tabs'/>
            <TitleNav  to='favorites' text='My favorites' className='tabs'/>
            <TitleNav  to='popular' text='Popular' className='tabs'/>
        </div>
    )
}
