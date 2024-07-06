import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import background from '../Static/background.svg'
import image1 from '../Static/CategoryImage1.png'
import image2 from '../Static/CategoryImage2.png'
import image3 from '../Static/CategoryImage3.png'
import image4 from '../Static/CategoryImage4.png'

function Categories() {
    const category_content = [
        {
            header: 'Pet Grooming',
            description: 'Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail',
            image: image1
        },
        {
            header: 'Pet Clinic',
            description: 'The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.',
            image: image2
        },
        {
            header: 'Pet Daycare',
            description: 'Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage',
            image: image3
        },
        {
            header: 'Pet Training',
            description: 'Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.',
            image: image4
        }
    ]

    const [header, setHeader] = useState(category_content[0].header);
    const [description, setDescription] = useState(category_content[0].description);
    const [image, setImage] = useState(category_content[0].image);

    function handleClick(choice) {
        if (choice === 'Pet Clinic'){
            setHeader(category_content[1].header);
            setDescription(category_content[1].description);
            setImage(category_content[1].image);
            document.getElementById('headerId').removeAttribute('class');
            document.getElementById('descriptionId').removeAttribute('class');
            document.getElementById('image-backgroundId').removeAttribute('class');
            document.getElementById('actual-imageId').removeAttribute('class');
            document.getElementById('category-button-1').removeAttribute('class');
            document.getElementById('category-button-1').classList.add('category-button-1-origional');
            document.getElementById('category-button-2').removeAttribute('class');
            document.getElementById('category-button-2').classList.add('category-button-2-alter');
            document.getElementById('category-button-3').removeAttribute('class');
            document.getElementById('category-button-3').classList.add('category-button-3-origional');
            document.getElementById('category-button-4').removeAttribute('class');
            document.getElementById('category-button-4').classList.add('category-button-4-origional');
            document.getElementById('headerId').classList.add('header-pet-clinic');
            document.getElementById('descriptionId').classList.add('description-pet-clinic');
            document.getElementById('image-backgroundId').classList.add('image-background2');
            document.getElementById('actual-imageId').classList.add('actual-image1');
        }
        else if(choice==='Pet Daycare'){
            setHeader(category_content[2].header);
            setDescription(category_content[2].description);
            setImage(category_content[2].image);
            document.getElementById('headerId').removeAttribute('class');
            document.getElementById('descriptionId').removeAttribute('class');
            document.getElementById('image-backgroundId').removeAttribute('class');
            document.getElementById('actual-imageId').removeAttribute('class');
            document.getElementById('category-button-1').removeAttribute('class');
            document.getElementById('category-button-1').classList.add('category-button-1-origional');
            document.getElementById('category-button-2').removeAttribute('class');
            document.getElementById('category-button-2').classList.add('category-button-2-origional');
            document.getElementById('category-button-3').removeAttribute('class');
            document.getElementById('category-button-3').classList.add('category-button-3-alter');
            document.getElementById('category-button-4').removeAttribute('class');
            document.getElementById('category-button-4').classList.add('category-button-4-origional');
            document.getElementById('headerId').classList.add('header-pet-daycare');
            document.getElementById('descriptionId').classList.add('description-pet-daycare');
            document.getElementById('image-backgroundId').classList.add('image-background3');
            document.getElementById('actual-imageId').classList.add('actual-image2');
        }
        else if(choice==='Pet Training'){
            setHeader(category_content[3].header);
            setDescription(category_content[3].description);
            setImage(category_content[3].image);
            document.getElementById('headerId').removeAttribute('class');
            document.getElementById('descriptionId').removeAttribute('class');
            document.getElementById('image-backgroundId').removeAttribute('class');
            document.getElementById('actual-imageId').removeAttribute('class');
            document.getElementById('category-button-1').removeAttribute('class');
            document.getElementById('category-button-1').classList.add('category-button-1-origional');
            document.getElementById('category-button-2').removeAttribute('class');
            document.getElementById('category-button-2').classList.add('category-button-2-origional');
            document.getElementById('category-button-3').removeAttribute('class');
            document.getElementById('category-button-3').classList.add('category-button-3-origional');
            document.getElementById('category-button-4').removeAttribute('class');
            document.getElementById('category-button-4').classList.add('category-button-4-alter');
            document.getElementById('headerId').classList.add('header-pet-training');
            document.getElementById('descriptionId').classList.add('description-pet-training');
            document.getElementById('image-backgroundId').classList.add('image-background4');
            document.getElementById('actual-imageId').classList.add('actual-image3');
        }
        else if(choice==='Pet Grooming'){
            setHeader(category_content[0].header);
            setDescription(category_content[0].description);
            setImage(category_content[0].image);
            document.getElementById('headerId').removeAttribute('class');
            document.getElementById('descriptionId').removeAttribute('class');
            document.getElementById('image-backgroundId').removeAttribute('class');
            document.getElementById('actual-imageId').removeAttribute('class');
            document.getElementById('category-button-1').removeAttribute('class');
            document.getElementById('category-button-1').classList.add('category-button-1-alter');
            document.getElementById('category-button-2').removeAttribute('class');
            document.getElementById('category-button-2').classList.add('category-button-2-origional');
            document.getElementById('category-button-3').removeAttribute('class');
            document.getElementById('category-button-3').classList.add('category-button-3-origional');
            document.getElementById('category-button-4').removeAttribute('class');
            document.getElementById('category-button-4').classList.add('category-button-4-origional');
            document.getElementById('headerId').classList.add('header');
            document.getElementById('descriptionId').classList.add('description');
            document.getElementById('image-backgroundId').classList.add('image-background');
            document.getElementById('actual-imageId').classList.add('actual-image');
        }
    }


    return (
        <div>
            <Navbar />

            <img src={background} className='back'></img>
            <div className='heading-category'>Categories</div>

            <svg className='scroll-svg' width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.19999 0.378828C5.52999 0.858828 5.21999 1.72883 5.21999 2.63883C5.21999 3.99883 6.03999 5.09883 7.40999 5.09883C9.95999 5.09883 8.88999 1.60883 10.68 1.60883C11.12 1.60883 11.76 1.92883 11.76 2.98883C11.76 3.53883 11.51 4.00883 11.14 4.24883L11.85 5.02883C12.5 4.49883 12.66 3.75883 12.66 2.98883C12.66 1.28883 11.51 0.588828 10.68 0.588828C7.91999 0.588828 8.92999 4.07883 7.29999 4.07883C6.51999 4.07883 6.11999 3.29883 6.11999 2.66883C6.11999 2.09883 6.35999 1.50883 6.87999 1.16883L6.19999 0.378828ZM11.56 11.5455C12.31 10.9755 12.66 9.99547 12.66 9.06547C12.66 6.88547 11.08 5.37547 8.87999 5.37547C7.09999 5.37547 5.21999 6.76547 5.21999 9.01547C5.21999 10.6355 6.16999 11.4855 6.45999 11.6955L7.06999 10.8855C6.47999 10.4655 6.11999 9.84547 6.11999 9.03547C6.11999 7.38547 7.38999 6.39547 8.87999 6.39547C10.49 6.39547 11.76 7.44547 11.76 9.03547C11.76 9.68547 11.47 10.3455 10.95 10.7455L11.56 11.5455ZM5.39999 12.1565L5.39999 13.1165L8.51999 13.1165L8.51999 14.1865L5.39999 15.9865L5.39999 17.1865L8.62999 15.1765C8.74999 16.2465 9.59999 16.9165 10.5 16.9165C11.39 16.9165 12.48 16.4565 12.48 14.6465L12.48 12.1565L5.39999 12.1565ZM11.64 13.1165L11.64 14.3765C11.64 15.1365 11.46 15.8965 10.5 15.8965C9.53999 15.8965 9.35999 15.1365 9.35999 14.3765L9.35999 13.1165L11.64 13.1165ZM5.21999 20.8198C5.21999 22.9798 6.83999 24.5098 8.93999 24.5098C11.04 24.5098 12.66 22.9798 12.66 20.8198C12.66 18.6598 11.04 17.1298 8.93999 17.1298C6.83999 17.1298 5.21999 18.6598 5.21999 20.8198ZM6.11999 20.8198C6.11999 19.1998 7.38999 18.1498 8.93999 18.1498C10.49 18.1498 11.76 19.1998 11.76 20.8198C11.76 22.4398 10.49 23.4898 8.93999 23.4898C7.38999 23.4898 6.11999 22.4398 6.11999 20.8198ZM5.39999 25.1901L5.39999 29.4001L6.29999 29.4001L6.29999 26.1501L12.48 26.1501L12.48 25.1901L5.39999 25.1901ZM5.39999 29.6756L5.39999 33.8856L6.29999 33.8856L6.29999 30.6356L12.48 30.6356L12.48 29.6756L5.39999 29.6756Z" fill="black" />
                <path d="M8.4 43.8C8.08174 43.8 7.77652 43.9264 7.55147 44.1515C7.32643 44.3765 7.2 44.6817 7.2 45V47.4C7.2 47.7183 7.32643 48.0235 7.55147 48.2485C7.77652 48.4736 8.08174 48.6 8.4 48.6C8.71826 48.6 9.02348 48.4736 9.24853 48.2485C9.47357 48.0235 9.6 47.7183 9.6 47.4V45C9.6 44.6817 9.47357 44.3765 9.24853 44.1515C9.02348 43.9264 8.71826 43.8 8.4 43.8ZM8.4 39C6.17218 39 4.03561 39.885 2.4603 41.4603C0.884997 43.0356 0 45.1722 0 47.4V54.6C3.31971e-08 56.8278 0.884997 58.9644 2.4603 60.5397C4.03561 62.115 6.17218 63 8.4 63C10.6278 63 12.7644 62.115 14.3397 60.5397C15.915 58.9644 16.8 56.8278 16.8 54.6V47.4C16.8 45.1722 15.915 43.0356 14.3397 41.4603C12.7644 39.885 10.6278 39 8.4 39ZM14.4 54.6C14.4 56.1913 13.7679 57.7174 12.6426 58.8426C11.5174 59.9679 9.9913 60.6 8.4 60.6C6.8087 60.6 5.28258 59.9679 4.15736 58.8426C3.03214 57.7174 2.4 56.1913 2.4 54.6V47.4C2.4 45.8087 3.03214 44.2826 4.15736 43.1574C5.28258 42.0321 6.8087 41.4 8.4 41.4C9.9913 41.4 11.5174 42.0321 12.6426 43.1574C13.7679 44.2826 14.4 45.8087 14.4 47.4V54.6Z" fill="black" />
                <path d="M26.0929 13.7071C26.4834 14.0976 27.1166 14.0976 27.5071 13.7071L33.8711 7.34315C34.2616 6.95262 34.2616 6.31946 33.8711 5.92893C33.4805 5.53841 32.8474 5.53841 32.4569 5.92893L26.8 11.5858L21.1431 5.92893C20.7526 5.53841 20.1195 5.53841 19.7289 5.92893C19.3384 6.31946 19.3384 6.95262 19.7289 7.34315L26.0929 13.7071ZM25.8 4.37114e-08L25.8 13L27.8 13L27.8 -4.37114e-08L25.8 4.37114e-08Z" fill="black" />
            </svg>

            <svg className='bone3' width="72" height="62" viewBox="0 0 72 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.1383 14.2159C59.2723 9.80611 54.1526 7.73081 49.7428 9.59674C45.8552 11.2417 43.7932 15.2612 44.5856 19.2359L21.1438 29.1547C18.8428 25.8184 14.5221 24.4996 10.6344 26.1446C6.22458 28.0105 4.14928 33.1302 6.01521 37.5401C6.82542 39.4549 8.22479 40.9835 10.0325 41.8605C9.42782 43.8267 9.5261 45.8375 10.3363 47.7523C12.2022 52.1622 17.3219 54.2375 21.7318 52.3715C25.6194 50.7266 27.6814 46.7071 26.8889 42.7324L50.2727 32.8381C52.5738 36.1744 56.8945 37.4932 60.7821 35.8483C65.192 33.9823 67.2673 28.8626 65.4013 24.4528C64.5911 22.538 63.1918 21.0093 61.384 20.1323C62.0468 18.1415 61.9485 16.1308 61.1383 14.2159ZM58.7663 22.6766C60.3776 23.0894 61.6877 24.2454 62.3261 25.754C63.48 28.4812 62.208 31.619 59.4809 32.773C56.8118 33.9023 53.723 32.7464 52.511 30.0439C52.1428 29.1735 51.1764 28.8298 50.306 29.1981L24.2531 40.2218C23.3828 40.5901 23.0391 41.5565 23.3248 42.3934C24.3962 45.087 23.1577 48.1423 20.4306 49.2963C17.7034 50.4502 14.5655 49.1782 13.4116 46.4511C12.7733 44.9425 12.8558 43.1972 13.6814 41.7533C13.9648 41.2913 13.9425 40.7534 13.7461 40.2892C13.5497 39.825 13.1212 39.4591 12.6503 39.3162C11.0389 38.9034 9.72884 37.7475 9.0905 36.2388C7.93657 33.5117 9.20852 30.3738 11.9357 29.2199C14.6048 28.0905 17.6936 29.2464 18.9055 31.949C19.2738 32.8194 20.2402 33.163 21.1105 32.7947L47.2795 21.7219C48.1498 21.3536 48.4935 20.3873 48.2078 19.5504C47.1364 16.8567 48.3749 13.8014 51.102 12.6475C53.8292 11.4935 56.9671 12.7655 58.121 15.4926C58.7593 17.0013 58.6769 18.7465 57.8512 20.1905C57.5678 20.6525 57.5901 21.1903 57.7865 21.6545C57.8669 22.1678 58.2954 22.5338 58.7663 22.6766Z" fill="#A0D6E7" />
                <path d="M30.6305 18.9153C31.5009 18.5471 31.9025 17.5561 31.5343 16.6858L29.7911 12.5661C29.4228 11.6957 28.4319 11.294 27.5615 11.6623C26.6912 12.0306 26.2895 13.0215 26.6578 13.8919L28.4009 18.0116C28.7692 18.8819 29.7601 19.2836 30.6305 18.9153Z" fill="#A0D6E7" />
                <path d="M36.857 17.7858C37.1382 17.8037 37.3369 17.7881 37.569 17.6898C38.1492 17.4443 38.5821 16.8507 38.5933 16.2302L38.7627 11.7801C38.7917 10.8785 38.0507 10.0974 37.1245 10.0104C36.2229 9.98146 35.4418 10.7224 35.3548 11.6486L35.1854 16.0987C35.1564 17.0003 35.8974 17.7814 36.857 17.7858Z" fill="#A0D6E7" />
                <path d="M23.1343 22.7029C23.6699 23.1604 24.3149 23.2295 24.8951 22.984C25.1272 22.8858 25.3348 22.7296 25.4597 22.5399C26.0667 21.8726 26.022 20.7969 25.3302 20.1318L22.0181 17.1548C21.3508 16.5478 20.2751 16.5925 19.6101 17.2844C19.0031 17.9517 19.0478 19.0274 19.7396 19.6924L23.1343 22.7029Z" fill="#A0D6E7" />
                <path d="M40.8441 43.0534C39.9738 43.4217 39.5721 44.4126 39.9404 45.283L41.6835 49.4027C42.0518 50.273 43.0427 50.6747 43.9131 50.3064C44.7834 49.9382 45.1851 48.9473 44.8168 48.0769L43.0737 43.9572C42.7054 43.0868 41.7145 42.6851 40.8441 43.0534Z" fill="#A0D6E7" />
                <path d="M34.6174 44.1828C33.7158 44.1539 32.9347 44.8948 32.8477 45.821L32.6783 50.2711C32.6493 51.1728 33.3903 51.9538 34.3164 52.0408C34.5976 52.0587 34.7963 52.043 35.0284 51.9448C35.6086 51.6993 36.0415 51.1056 36.0527 50.4852L36.2221 46.0351C36.318 44.9683 35.577 44.1873 34.6174 44.1828Z" fill="#A0D6E7" />
                <path d="M48.3403 39.2657C47.673 38.6587 46.5973 38.7033 45.9322 39.3952C45.3252 40.0625 45.3699 41.1382 46.0618 41.8033L49.3738 44.7803C49.9095 45.2377 50.5544 45.3069 51.1347 45.0614C51.3668 44.9632 51.5743 44.807 51.6993 44.6172C52.3063 43.9499 52.2616 42.8742 51.5697 42.2092L48.3403 39.2657Z" fill="#A0D6E7" />
            </svg>

            <svg className='paw-category-1' width="79" height="82" viewBox="0 0 79 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.3318 40.686C31.8729 42.0787 31.3594 48.332 26.3212 54.9577C19.0925 64.6516 21.7896 71.5106 27.2989 72.0228C32.8082 72.535 36.2775 65.6992 42.1522 64.9809C47.8812 63.8918 53.3519 69.1655 58.3153 66.6694C63.3515 64.3586 63.7927 56.8412 53.9441 50.1532C47.3418 45.7816 44.8268 39.9254 38.3318 40.686Z" fill="#D9A6FF" />
                <path d="M20.6968 37.979C25.0282 42.8252 26.4837 49.0971 23.9762 51.9742C21.295 54.9236 15.6346 53.3811 11.3032 48.5349C6.97171 43.6887 5.51631 37.4168 8.02379 34.5397C10.705 31.5903 16.3653 33.1328 20.6968 37.979Z" fill="#D9A6FF" />
                <path d="M52.9849 32.5976C50.1639 38.336 50.8397 44.3588 54.3051 46.1777C57.7706 47.9967 62.9313 44.9804 65.7522 39.2419C68.5732 33.5035 67.8974 27.4808 64.432 25.6618C60.7847 23.9185 55.624 26.9348 52.9849 32.5976Z" fill="#D9A6FF" />
                <path d="M33.5878 23.3125C35.9484 29.8499 34.5213 36.3679 30.6543 37.7487C26.7872 39.1296 21.7435 34.8477 19.3829 28.3104C17.0223 21.773 18.4494 15.255 22.3165 13.8741C26.1836 12.4932 31.2273 16.7751 33.5878 23.3125Z" fill="#D9A6FF" />
                <path d="M37.0129 22.5144C36.9112 29.0129 40.1468 34.123 44.0472 34.1665C48.1232 34.1369 51.4233 29.0154 51.5954 22.6959C51.6971 16.1974 48.4614 11.0873 44.5611 11.0438C40.5903 10.8213 37.1146 16.016 37.0129 22.5144Z" fill="#D9A6FF" />
            </svg>

            <svg className='paw-category-2' width="94" height="101" viewBox="0 0 94 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.807 48.4317C49.8165 55.7673 56.6665 52.582 66.3603 55.1078C80.5096 58.5252 85.8268 51.1954 83.0354 43.8121C80.3352 36.7307 71.5349 36.2363 67.0538 29.7248C62.5726 23.2134 64.5957 13.2961 59.2076 8.39909C53.8196 3.50211 46.0432 7.31501 45.0829 23.5135C44.5341 34.6143 40.0519 41.0147 44.807 48.4317Z" fill="#FFAA00" />
                <path d="M52.2357 70.2223C54.0433 62.3604 59.3996 57.0045 63.8746 58.883C68.3496 60.7616 70.7236 68.6096 68.7528 76.8548C66.9451 84.7167 61.5889 90.0726 57.1139 88.1941C52.6389 86.3155 50.5193 78.3861 52.2357 70.2223Z" fill="#FFAA00" />
                <path d="M28.3165 34.5074C35.662 34.8052 41.2921 30.3548 41.0121 24.8163C40.732 19.2778 34.5807 14.6252 27.3265 14.6292C19.981 14.3315 14.3508 18.7818 14.6309 24.3203C14.8196 29.5569 20.971 34.2096 28.3165 34.5074Z" fill="#FFAA00" />
                <path d="M30.0104 64.0924C35.0927 57.831 42.3079 55.853 46.0586 59.9497C49.8094 64.0464 48.7845 72.651 43.7022 78.9124C38.6198 85.1739 31.4046 87.1519 27.6539 83.0551C24.1576 78.877 25.0193 70.6556 30.0104 64.0924Z" fill="#FFAA00" />
                <path d="M27.46 60.2737C34.1273 56.4846 37.8268 49.3415 35.3287 43.8507C32.9219 38.6618 25.5569 37.377 18.6351 41.2475C11.9677 45.0366 8.26831 52.1797 10.7664 57.6705C13.1732 62.8594 20.7926 64.0628 27.46 60.2737Z" fill="#FFAA00" />
            </svg>

            <svg className='paw-category-3' width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.6458 40.5257C73.0019 47.2107 82.1937 33.0052 80.5225 24.649C85.5362 9.60797 68.8239 3.75866 62.9745 17.9641C55.454 23.8134 54.6184 40.5257 64.6458 40.5257ZM65.4814 38.0189C56.2896 38.8545 59.6321 23.8134 64.6458 19.6354V18.7997C69.6595 6.2655 82.1937 11.2792 77.18 23.8134V24.649C78.8512 31.334 72.1663 44.7038 64.6458 38.0189H65.4814Z" fill="#124C5F" />
                <path d="M37.0705 30.4985C45.4266 37.1834 54.6184 22.9779 52.9472 14.6218C57.9609 -0.419287 41.2485 -6.2686 35.3992 8.77248C27.8787 14.6218 27.0431 31.3341 37.0705 31.3341V30.4985ZM37.9061 27.9916C28.7143 28.8273 32.0568 13.7862 37.0705 9.6081V8.77248C42.0842 -3.76175 54.6184 1.25194 49.6047 13.7862V14.6218C51.2759 21.3067 44.591 34.6766 37.0705 27.9916H37.9061Z" fill="#124C5F" />
                <path d="M78.8511 68.9367C86.3717 73.9503 95.5634 66.4298 92.221 58.0737C95.5634 47.2107 79.6868 41.3613 74.6731 52.2243C67.1525 56.4024 69.6594 68.101 78.0155 68.9367H78.8511ZM79.6868 66.4298H78.8511C72.1662 65.5942 70.495 56.4024 76.3443 53.8956L77.1799 53.06C80.5224 44.7038 93.0566 49.7175 89.7141 58.0737V58.9093C92.221 64.7586 85.5361 71.4435 79.6868 67.2654V66.4298Z" fill="#124C5F" />
                <path d="M8.65949 43.8683C16.18 48.882 25.3718 41.3614 22.0293 33.0053C25.3718 22.1423 9.49511 16.293 4.48141 27.156C-3.03913 31.3341 -0.532283 43.0327 7.82387 43.8683H8.65949ZM9.4951 41.3614H8.65949C1.97456 40.5258 0.303333 31.3341 6.15264 28.8272L6.98826 27.9916C10.3307 19.6354 22.865 24.6491 19.5225 33.0053V33.8409C22.0293 39.6902 15.3444 46.3751 9.4951 42.1971V41.3614Z" fill="#124C5F" />
                <path d="M65.4812 66.4301C73.8373 40.526 30.3853 24.6493 20.3579 49.7178C-5.54617 63.9232 12.0018 81.4712 31.2209 88.9917C50.4401 95.6766 76.3442 94.0054 65.4812 66.4301ZM62.9743 66.4301V67.2657C73.0017 92.3342 49.6045 94.0054 32.0565 87.3205C14.5086 80.6356 -3.03932 65.5945 21.1935 52.2246L22.0291 51.389C31.2209 27.9918 70.4949 43.0329 62.9743 66.4301Z" fill="#124C5F" />
            </svg>


            <div className='info-container'>
                <div id='headerId' className='header'>
                    {header}
                </div>
                <div id='descriptionId' className='description'>
                    {description}
                </div>
                <div id='getstarted-btnId' className='getstarted-btn'>
                    <button id='getstarted-btn-insideId' className='getstarted-btn-inside'><span id='getstarted-btn-textId' className='getstarted-btn-text'></span>Get Started</button>
                </div>
            </div>
            <div id='imageId' className='image'>

                <img id='actual-imageId' className='actual-image' src={image} />
                <div id='image-backgroundId' className='image-background'>  </div>
            </div>

            {/* ({activeChoice==='Pet Grooming'} && 
            <div className='info-container'>
                <div className='header'>
                    Pet Grooming
                </div>
                <div className='description'>
                    Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail
                </div>
                <div className='signin-btn-outside'>
                    <button className='signin-btn'>Get Started</button>
                </div>
                <div className='image'>

                    <img className='actual-image' src={image1} />
                    <div className='image-background'>  </div>
                </div>
                </div>) */}

            <div className='category-buttons'>
                <button onClick={() => handleClick('Pet Grooming')} id='category-button-1' className='category-button-1-alter'>
                    <span className='logo-container'>
                        <svg className='small-logo' width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0554 20.3304C16.743 22.2046 17.8285 24.8978 17.1693 28.654C16.2624 34.1211 18.7656 36.4203 21.0894 35.5258C23.4133 34.6313 23.3973 31.1032 25.614 29.6257C27.6954 28.0239 30.9876 29.1093 32.47 27.0785C34.02 25.1098 32.6442 21.9076 27.2972 21.1157C23.7358 20.6312 21.5131 18.7108 19.0554 20.3304Z" fill="#FFE55E" />
                            <path d="M11.3963 22.7511C14.1416 23.8883 16.0236 26.1937 15.6087 27.889C15.1387 29.6492 12.5412 30.1473 9.79593 29.01C7.05068 27.8728 5.16868 25.5674 5.58361 23.8721C6.05356 22.1119 8.6511 21.6139 11.3963 22.7511Z" fill="#FFAA00" />
                            <path d="M23.2831 14.037C23.3333 16.9804 24.8499 19.3392 26.621 19.3966C28.392 19.4539 29.8463 17.168 29.7962 14.2246C29.746 11.2811 28.2294 8.92234 26.4583 8.86503C24.6297 8.87556 23.1754 11.1615 23.2831 14.037Z" fill="#FFAA00" />
                            <path d="M13.5551 14.0875C15.8564 16.3211 16.6288 19.3074 15.3573 20.6561C14.0858 22.0047 11.1704 21.2443 8.86914 19.0108C6.56786 16.7772 5.79545 13.7909 7.06694 12.4422C8.33843 11.0935 11.2538 11.854 13.5551 14.0875Z" fill="#FFAA00" />
                            <path d="M14.7694 13.0687C16.0714 15.7807 18.43 17.2473 20.0093 16.4819C21.6441 15.6509 21.9143 12.8668 20.6777 10.2148C19.3758 7.50276 17.0171 6.03614 15.4379 6.80154C13.7933 7.50696 13.4675 10.3567 14.7694 13.0687Z" fill="#FFAA00" />
                        </svg>
                    </span>
                    <span className='category-button-text'>Pet Grooming</span>
                </button>

                <button onClick={() => handleClick('Pet Clinic')} id='category-button-2' className='category-button-2-origional'>
                    <span className='logo-container'>
                        <svg className='small-logo' width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0554 20.3304C16.743 22.2046 17.8285 24.8978 17.1693 28.654C16.2624 34.1211 18.7656 36.4203 21.0894 35.5258C23.4133 34.6313 23.3973 31.1032 25.614 29.6257C27.6954 28.0239 30.9876 29.1093 32.47 27.0785C34.02 25.1098 32.6442 21.9076 27.2972 21.1157C23.7358 20.6312 21.5131 18.7108 19.0554 20.3304Z" fill="#FFE55E" />
                            <path d="M11.3963 22.7511C14.1416 23.8883 16.0236 26.1937 15.6087 27.889C15.1387 29.6492 12.5412 30.1473 9.79593 29.01C7.05068 27.8728 5.16868 25.5674 5.58361 23.8721C6.05356 22.1119 8.6511 21.6139 11.3963 22.7511Z" fill="#FFAA00" />
                            <path d="M23.2831 14.037C23.3333 16.9804 24.8499 19.3392 26.621 19.3966C28.392 19.4539 29.8463 17.168 29.7962 14.2246C29.746 11.2811 28.2294 8.92234 26.4583 8.86503C24.6297 8.87556 23.1754 11.1615 23.2831 14.037Z" fill="#FFAA00" />
                            <path d="M13.5551 14.0875C15.8564 16.3211 16.6288 19.3074 15.3573 20.6561C14.0858 22.0047 11.1704 21.2443 8.86914 19.0108C6.56786 16.7772 5.79545 13.7909 7.06694 12.4422C8.33843 11.0935 11.2538 11.854 13.5551 14.0875Z" fill="#FFAA00" />
                            <path d="M14.7694 13.0687C16.0714 15.7807 18.43 17.2473 20.0093 16.4819C21.6441 15.6509 21.9143 12.8668 20.6777 10.2148C19.3758 7.50276 17.0171 6.03614 15.4379 6.80154C13.7933 7.50696 13.4675 10.3567 14.7694 13.0687Z" fill="#FFAA00" />
                        </svg>
                    </span>
                    <span className='category-button-text-2'>Pet Clinic</span>
                </button>

                <button onClick={() => handleClick('Pet Daycare')} id='category-button-3' className='category-button-3-origional'>
                    <span className='logo-container'>
                        <svg className='small-logo' width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0554 20.3304C16.743 22.2046 17.8285 24.8978 17.1693 28.654C16.2624 34.1211 18.7656 36.4203 21.0894 35.5258C23.4133 34.6313 23.3973 31.1032 25.614 29.6257C27.6954 28.0239 30.9876 29.1093 32.47 27.0785C34.02 25.1098 32.6442 21.9076 27.2972 21.1157C23.7358 20.6312 21.5131 18.7108 19.0554 20.3304Z" fill="#FFE55E" />
                            <path d="M11.3963 22.7511C14.1416 23.8883 16.0236 26.1937 15.6087 27.889C15.1387 29.6492 12.5412 30.1473 9.79593 29.01C7.05068 27.8728 5.16868 25.5674 5.58361 23.8721C6.05356 22.1119 8.6511 21.6139 11.3963 22.7511Z" fill="#FFAA00" />
                            <path d="M23.2831 14.037C23.3333 16.9804 24.8499 19.3392 26.621 19.3966C28.392 19.4539 29.8463 17.168 29.7962 14.2246C29.746 11.2811 28.2294 8.92234 26.4583 8.86503C24.6297 8.87556 23.1754 11.1615 23.2831 14.037Z" fill="#FFAA00" />
                            <path d="M13.5551 14.0875C15.8564 16.3211 16.6288 19.3074 15.3573 20.6561C14.0858 22.0047 11.1704 21.2443 8.86914 19.0108C6.56786 16.7772 5.79545 13.7909 7.06694 12.4422C8.33843 11.0935 11.2538 11.854 13.5551 14.0875Z" fill="#FFAA00" />
                            <path d="M14.7694 13.0687C16.0714 15.7807 18.43 17.2473 20.0093 16.4819C21.6441 15.6509 21.9143 12.8668 20.6777 10.2148C19.3758 7.50276 17.0171 6.03614 15.4379 6.80154C13.7933 7.50696 13.4675 10.3567 14.7694 13.0687Z" fill="#FFAA00" />
                        </svg>
                    </span>
                    <span className='category-button-text-3'>Pet Daycare</span>
                </button>

                <button onClick={() => handleClick('Pet Training')} id='category-button-4' className='category-button-4-origional'>
                    <span className='logo-container'>
                        <svg className='small-logo' width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0554 20.3304C16.743 22.2046 17.8285 24.8978 17.1693 28.654C16.2624 34.1211 18.7656 36.4203 21.0894 35.5258C23.4133 34.6313 23.3973 31.1032 25.614 29.6257C27.6954 28.0239 30.9876 29.1093 32.47 27.0785C34.02 25.1098 32.6442 21.9076 27.2972 21.1157C23.7358 20.6312 21.5131 18.7108 19.0554 20.3304Z" fill="#FFE55E" />
                            <path d="M11.3963 22.7511C14.1416 23.8883 16.0236 26.1937 15.6087 27.889C15.1387 29.6492 12.5412 30.1473 9.79593 29.01C7.05068 27.8728 5.16868 25.5674 5.58361 23.8721C6.05356 22.1119 8.6511 21.6139 11.3963 22.7511Z" fill="#FFAA00" />
                            <path d="M23.2831 14.037C23.3333 16.9804 24.8499 19.3392 26.621 19.3966C28.392 19.4539 29.8463 17.168 29.7962 14.2246C29.746 11.2811 28.2294 8.92234 26.4583 8.86503C24.6297 8.87556 23.1754 11.1615 23.2831 14.037Z" fill="#FFAA00" />
                            <path d="M13.5551 14.0875C15.8564 16.3211 16.6288 19.3074 15.3573 20.6561C14.0858 22.0047 11.1704 21.2443 8.86914 19.0108C6.56786 16.7772 5.79545 13.7909 7.06694 12.4422C8.33843 11.0935 11.2538 11.854 13.5551 14.0875Z" fill="#FFAA00" />
                            <path d="M14.7694 13.0687C16.0714 15.7807 18.43 17.2473 20.0093 16.4819C21.6441 15.6509 21.9143 12.8668 20.6777 10.2148C19.3758 7.50276 17.0171 6.03614 15.4379 6.80154C13.7933 7.50696 13.4675 10.3567 14.7694 13.0687Z" fill="#FFAA00" />
                        </svg>
                    </span>
                    <span className='category-button-text-4'>Pet Training</span>
                </button>
            </div>

        </div>
    )
}

export default Categories
