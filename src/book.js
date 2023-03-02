import '../src/css/book.css'
import { useNavigate } from "react-router-dom";

export const Book = (props) => {
    const { img, title, author, number, description, link } = props;

    console.log(link)
    // const handleClick = () => {
    //     window.location.href = {link};
    //   };
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
    return (
        <div className="book">
            <div className='front'>
            <div className='number'><b>{`# ${number + 1}`}</b></div>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            </div>
            <div className='back'>
                <div className='description'><b>{description}</b></div>
            <button className='buy-btn' onClick={() => openInNewTab(link)}><b>Buy Now</b></button>
            </div>
        </div>
    )
}