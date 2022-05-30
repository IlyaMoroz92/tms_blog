import { Postcard } from "../../components/Postcard";
import {  content } from '../../components/Postcard/content';

export const AllPage = () => {
    return (
        <div className="all__blog">
            {content.map((el, ind) => {
                if(ind < 1) {
                return (
                    <Postcard
                        key={ind}
                        title={el.title}
                        text={el.text}
                        image={el.image}
                        date={el.date}
                        className={`sizeL grid--${ind}`}
                    />
                )} else if(ind < 5) {
                return (
                    <Postcard 
                        key={ind}
                        title={el.title}
                        image={el.image}
                        date={el.date}
                        className={`sizeM grid--${ind}`}
                    />
                )} else if(ind < 11) {
                return (
                    <Postcard
                        key={ind}
                        title={el.title}
                        image={el.image}
                        date={el.date}
                        className={`sizeS grid--${ind}`}
                    />
                )}
                }
            )}
        </div>
    );
}