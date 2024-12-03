import React,{useState} from 'react'
import './Home.css'
import homeImage from './homeImages/house.png'
import welcomeImage from './homeImages/homePage.jpg'
import searchImage from './homeImages/searchIcon.png'
import mapImage from './homeImages/map.png'
import usersImage from './homeImages/users.png'
import verifyImage from './homeImages/verify.png'
import filterImage from './homeImages/filter.png'
import arzImage from './homeImages/arz.jpg'
import imagePart1 from './homeImages/body1.jpg'
import imagePart2 from './homeImages/body2.webp'
import imagePart3 from './homeImages/body3.jpg'
import {useNavigate} from 'react-router-dom'


function Home(){

const [search, setSearch] = useState();
const [isHovered1, setIsHovered1] = useState(false);
const [isHovered2, setIsHovered2] = useState(false);
const [isHovered3, setIsHovered3] = useState(false);
const [isHovered4, setIsHovered4] = useState(false);

const mouseEnterButton1 = () => {
    setIsHovered1(true);
}
const mouseEnterButton2 = () => {
    setIsHovered2(true);
}
const mouseEnterButton3 = () => {
    setIsHovered3(true);
}
const mouseEnterButton4 = () => {
    setIsHovered4(true);
}
const mouseLeaveButton1 = () => {
    setIsHovered1(false);
}
const mouseLeaveButton2 = () => {
    setIsHovered2(false);
}
const mouseLeaveButton3 = () => {
    setIsHovered3(false);
}
const mouseLeaveButton4 = () => {
    setIsHovered4(false);
}
const cardClassName = () => {
    if(isHovered1)
        return "back1 back1Hover"
    else
        if(isHovered2)
            return "back2"
        else
            if(isHovered3)
                return "back3"
            else
                if(isHovered4)
                    return "back4"
}
const cardBackContent = () => {
    if(isHovered1)
        return (
    <div className='backInfo'>
           <b className='backBold'> what is beyti</b> <br></br><br></br> is a platform dedicated to connecting people in Lebanon with safe and affordable housing options during these challenging times. Whether you're looking for a place to call home or have a property to offer, Beyti provides a simple and trusted way to connect and support each other in finding shelter and stability.
            </div>)
    else
        if(isHovered2)
            return (
    <div className='backInfo'>
           <b className='backBold'> how it works</b> <br></br><br></br> Beyti makes it easy for users to find or share housing. If you're looking for a place, explore our listings page with filters to find homes that match your needs. Property owners can use the post listings page to quickly add available rentals to the platform. With just a few clicks,
            </div>)
        else
            if(isHovered3)
                return (
    <div className='backInfo'>
           <b className='backBold'> how to use</b> <br></br><br></br> To Add a Property: Go to the Post Listing page and click on Add Property. Fill in the details about your property, such as location, price, and amenities, and upload photos to help renters see what you’re offering. Once you’re done, submit the listing to make it available on the site.To Rent a House: Visit the Rent Houses page to browse available properties.
            </div>)
            else
                if(isHovered4)
                    return (
    <div className='backInfo'>
           <b className='backBold'> what is the purpose</b> <br></br><br></br>Beyti was created to support people in Lebanon by providing a trusted platform for finding housing amid challenging circumstances. Our mission is to help individuals and families find a safe place to call home, whether temporarily or long-term, by connecting them with available properties across the country.

            </div>)
}
const cardHover = () => {
    if(isHovered1 || isHovered2 || isHovered3 || isHovered4)
        return "card back1Hover"
        else
        if(!isHovered1)
            return "card"
}


const navigate = useNavigate();


    return(
    <div className="HomeContainer">
        <div className='header1'>
            <div className='logo'>
                <img src={homeImage} className='homeImage'></img>
                <div className='webName'>beyti</div>
            </div>
            <button className='navBar' onClick={()=> navigate("./Search")}>search</button>
            <button className='navBar' onClick={()=> navigate("./PostListing")}>post listing</button>
            <button className='navBar' onClick={()=> navigate("./About")}>about</button>
            <button className='navBar' onClick={()=> navigate("./Contact")}>contact</button>
            <button className='login'>login</button>
            <button className='signup'>signup</button>
        </div>
        <div className='header2'>
            <div className='welcomeSentence'>I'm not only perfect I'm <b className='bold'>lebanese</b> too</div>
                <div>
                    <div className='buttonContainer'>
                        <button
                        className='button1'
                        onMouseEnter={mouseEnterButton1}
                        onMouseLeave={mouseLeaveButton1}>
                         what is beyti?
                         </button>
                                <br></br>
                        <button
                        className='button1'
                        onMouseEnter={mouseEnterButton2}
                        onMouseLeave={mouseLeaveButton2}>
                           how it works?
                           </button>
                                <br></br>
                        <button
                        className='button1'
                        onMouseEnter={mouseEnterButton3}
                        onMouseLeave={mouseLeaveButton3}>
                           how to use?
                           </button>
                                <br></br>
                        <button 
                        className='button1' 
                        onMouseEnter={mouseEnterButton4} 
                        onMouseLeave={mouseLeaveButton4}>
                        what is the purpose?
                        </button>
                    </div>
                <div className='imageContainer'>
                    <img src={welcomeImage} className='welcomeImage'></img>
                    <div className='cardContainer'>
                        <div className={cardHover()}>
                            <div className='front'>

                            welcome<br/>to<br/><b className='webName2'>beyti</b>
                            <img className='arzImage' src={arzImage} ></img>
                            </div>
                            <div className={cardClassName()}>{cardBackContent()}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homesearchContainer'>
                <input value={search} className="searchBar" placeholder="search"/>
                    <img src={searchImage} className='searchIcon'></img>
            </div>
        </div>

        <div className='bodyContainer'>
            <div className='part1'>
                <img className='imagePart1' src={imagePart1}></img>
                <div className='titlePart1'>rent over all the coutry</div>
                <div className='contentPart1'>With Beyti, finding a rental home anywhere in Lebanon is easier than ever. Our platform connects renters and property owners across the country, offering options in cities, towns, and rural areas alike. Whether you're searching for a cozy apartment in the heart of Beirut or a peaceful retreat in the mountains, Beyti provides a range of listings to suit every preference and budget. We aim to make housing accessible to everyone, wherever they may need it.</div>
            </div>
            <div className='part2'>
                <img className='imagePart2' src={imagePart2}></img>
                <div className='titlePart2'>safety and peace of mind are our top priorities</div>
                <div className='contentPart2'>At Beyti, we prioritize your safety every step of the way. Each listing is carefully reviewed to ensure it meets quality and security standards, giving you confidence as you search for a home. We provide a trusted platform where both renters and property owners can connect securely, knowing that their experience is backed by our commitment to safety and transparency.</div>
            </div>
            <div className='part3'>
                <img className='imagePart3' src={imagePart3}></img>
                <div className='titlePart3'>quality and comfort you can trust</div>
                <div className='contentPart3'>At Beyti, we are dedicated to providing only the highest-quality rental homes. Each listing is carefully vetted to ensure it meets the standards of comfort, reliability, and functionality, so you can trust that every property offers a welcoming and livable environment. Whether you’re renting or offering a property, Beyti ensures quality is at the heart of every transaction.</div>
            </div>

        </div>





        <div className='featuresContainer'>
            <div className='feature'>
                <img className='featureImage' src={filterImage}></img>
                <div className=' featureTitle'>filter</div>
                <div className=' featureContent'>Allow users to filter by location, price range, property type, number of bedrooms, amenities, and other criteria, making it easy to find a property that suits their needs.</div>
            </div>
            <div className='feature'>
                <img className=' featureImage' src={verifyImage}></img>
                <div className=' featureTitle'>verified</div>
                <div className=' featureContent'>Emphasize a verification process for listings, giving users confidence that the properties on the site are genuine and the information is reliable.</div>
            </div>
            <div className='feature'>
                <img className=' featureImage' src={usersImage}></img>
                <div className=' featureTitle'>user friendly</div>
                <div className=' featureContent'>Make it easy for property owners to list their rentals with a guided, user-friendly submission form, including options to add detailed descriptions, high-quality images, and pricing information.</div>
            </div>
            <div className='feature'>
                <img className=' featureImage' src={mapImage}></img>
                <div className=' featureTitle'>map</div>
                <div className=' featureContent'>An embedded, interactive map that allows users to view available rentals by location, making it easier to visualize and compare listings within specific areas of Lebanon.</div>
            </div>
        </div>
    </div>
    )
}


export default Home;