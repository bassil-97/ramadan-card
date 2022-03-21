import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

//Themes 
import RamadanTheme from '../../Assets/ramadan-bg.jpg';
import DarkTheme from '../../Assets/dark-bg.jpg';
import BlueTheme from '../../Assets/1789.jpg';
import BrownTheme from '../../Assets/8334.jpg';
import SplashTheme from '../../Assets/24971.jpg';

//Cards Header Images
import headerImg from '../../Assets/3.png';
import img1 from '../../Assets/ramadan/1.png';
import img2 from '../../Assets/ramadan/2.png';
import img3 from '../../Assets/ramadan/4.png';
import img4 from '../../Assets/ramadan/5.png';
import img5 from '../../Assets/ramadan/6.png';
import img6 from '../../Assets/ramadan/7.png';
import img7 from '../../Assets/ramadan/8.png';
import img8 from '../../Assets/ramadan/9.png';
import img9 from '../../Assets/ramadan/10.png';
import img10 from '../../Assets/ramadan/11.png';
import img11 from '../../Assets/ramadan/12.png';

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download from 'downloadjs';
import Snackbar from '../snackbar';

import moment from 'moment';

import './card.css';


const useStyles = makeStyles((theme) => ({
    ramadanMsgBtn: {
      fontFamily: 'Tajwal',
      '&:focus': {
        outline: 'none'
        }
    },
    inputLabel: {
        textAlign: 'left',
        width: '100%',
        fontFamily: 'Tajwal'
    }
}));


export default function Card() {

    const classes = useStyles();

    const [imgSrc, setImgSrc] = useState(RamadanTheme);
    const [srcTitle, setSrcTitle] = useState("ramadanTheme")
    const [titleImg, setTitleImg] = useState(headerImg);
    const [titeVal, setTitleVal] = useState("1");
    const [userName, setUserName] = useState("");
    const today = moment().format("MMM Do YYYY");

    const msg1 = "كل عام وأنتم بخير مبارك عليكم الشهر رمضان كريم أعاده الله عليكم أعوام عديدة وأزمنة مديدة أعادة الله علينا وعليكم بالخير والمسرات";
    const msg2 = "اللهم إني أحب عبدك هذا فيك فأحبه وبلغه شهر رمضان يا كريم أمانياً تسبق تهانياً وفرحتنا تسبق ليالينا ومبارك الشهر علينا وعليك";
    const msg3 = "بلغنا الله وإياكم شهر رمضان بنفحات الإيمان وآيات القران وبذكر الرحمن وبالصلاة والسلام على خير الأنام نهنئكم بقرب شهر القرآن (شهر رمضان المبارك)";
    const msg4 = "في رمضان بلذة الأسحار وِصحبة الأخيار وِرحمة الغفار وَجنة الأبرار بلغك الله العشر ورفع عنا وعنك الشر وأكرمك بليلة القدر وأسعدك طول الدهر رمضانك مبارك";
    const msg5 = "ملأ الله قلبك عزماً وجعل لك في الفردوس أسماً ومن كل خير قسماً بارك الله لنا في رجب وشعبان وبلغنا صيام رمضان وبارك لك في عمرك وصحتك ومالك ووقتك وأسعدك الله مدى الحياة اللهم آمين دعوة من قلب محب";
    const msg6 = "أسأل الله الذي أهلّ الهلال وأرسى الجبال أن يبلغك رمضان وأنت في أحسن حال وكل عام وأنتم بألف بخير";
    
    const [msg, setMsg] = useState(msg1);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const saveUserCard = ()=> {

        if(userName == '') {
            handleClick();
        } else {
            htmlToImage.toPng(document.getElementById('user-card'))
            .then(function (dataUrl) {
                download(dataUrl, 'my-node.png');
            });
        }
        
    }

    const changeTheme = (theme)=> {
        setSrcTitle(theme);
        switch(theme) {
            case 'ramadanTheme':
                setImgSrc(RamadanTheme);
                break;
            case 'darkTheme':
                setImgSrc(DarkTheme);
                break;
            case 'blueTheme':
                setImgSrc(BlueTheme);
                break;
            case 'brownTheme':
                setImgSrc(BrownTheme);
                break;
            case 'splashTheme':
                setImgSrc(SplashTheme);
                break;
        }
    }

    const changeTitleImge = (img)=> {
        setTitleVal(img);
        switch(img) {
            case '1':
                setTitleImg(img1);
                break;
            case '2':
                setTitleImg(img2);
                break;
            case '3':
                setTitleImg(img3);
                break;
            case '4':
                setTitleImg(img4);
                break;
            case '5':
                setTitleImg(img5);
                break;
            case '6':
                setTitleImg(img6);
                break;
            case '7':
                setTitleImg(img7);
                break;
            case '8':
                setTitleImg(img8);
                break;
            case '9':
                setTitleImg(img9);
                break;
            case '10':
                setTitleImg(img10);
                break;
            case '11':
                setTitleImg(img11);
                break;
            case '12':
                setTitleImg(headerImg);
                break;
        }
    }

    const changeMsg = (userMsg)=> {

        switch(userMsg) {
            case '1':
                setMsg(msg1);
                break;
            case '2':
                setMsg(msg2);
                break;
            case '3':
                setMsg(msg3);
                break;
            case '4':
                setMsg(msg4);
                break;
            case '5':
                setMsg(msg5);
                break;
            case '6':
                setMsg(msg6);
                break;
        }
    }

    return (
        <div>
        <div className="w-100 d-flex align-items-center justify-content-center flex-column">
            <div className="row w-100 d-flex align-items-center justify-content-center flex-column">
                <h5 className="display-4 text-center mb-4">اختر قالبا للبطاقة</h5>
                <FormGroup className="w-75 mt-2">
                    <FormControl className="mb-4">
                        <InputLabel className={classes.inputLabel} id="demo-simple-select-label">اختر قالبا</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e)=>changeTheme(e.target.value)}
                            value={srcTitle}
                            fullWidth
                        >
                            <MenuItem value={"ramadanTheme"}>Ramadan Theme</MenuItem>
                            <MenuItem value={"darkTheme"}>Dark Theme</MenuItem>
                            <MenuItem value={"blueTheme"}>Blue Theme</MenuItem>
                            <MenuItem value={"brownTheme"}>Brown Theme</MenuItem>
                            <MenuItem value={"splashTheme"}>Splash Theme</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="mb-4">
                        <InputLabel className={classes.inputLabel} id="demo-simple-select-label">اختر مخطوطة رمضان</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e)=>changeTitleImge(e.target.value)}
                            value={titeVal}
                            fullWidth
                        >
                            <MenuItem value={"1"}>المخطوطة الأولى</MenuItem>
                            <MenuItem value={"2"}>المخطوطة الثانية</MenuItem>
                            <MenuItem value={"3"}>المخطوطة الثالثة</MenuItem>
                            <MenuItem value={"4"}>المخطوطة الرابعة</MenuItem>
                            <MenuItem value={"5"}>المخطوطة الخامسة</MenuItem>
                            <MenuItem value={"6"}>المخطوطة السادسة</MenuItem>
                            <MenuItem value={"7"}>المخطوطة السابعة</MenuItem>
                            <MenuItem value={"8"}>المخطوطة الثامنة</MenuItem>
                            <MenuItem value={"9"}>المخطوطة التاسعة</MenuItem>
                            <MenuItem value={"10"}>المخطوطة العاشرة</MenuItem>
                            <MenuItem value={"11"}>المخطوطة الحادية عشرة</MenuItem>
                            <MenuItem value={"12"}>المخطوطة الثانية عشرة</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel className={classes.inputLabel} id="demo-simple-select-label">ادخل اسمك</InputLabel>
                        <Input onChange={(e)=> setUserName(e.target.value)} />
                    </FormControl>
                </FormGroup>
            </div>
            <div className="row w-100 my-4" id="user-card-wrapper">
                <div className="card" style={{maxWidth: "100%"}} id="user-card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={imgSrc} className="card-img" alt="user-card" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body d-flex align-items-center justify-content-center flex-column text-center h-100">
                            <img src={titleImg} className="img-fluid" width="40%" height="40%" alt="Card Header Image" />
                            <p className="card-text">{msg}</p>
                            <p className="card-text text-capitalize"><small className="text-muted">{userName}</small></p>
                            <p className="card-text"><small className="text-muted">{today}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row w-100 mb-4 d-flex align-items-center justify-content-center">
                <Fab title="تنزيل البطاقة" aria-label="download card" onClick={saveUserCard}>
                    <SaveAltIcon />
                </Fab>
            </div>
            <div className="row w-100 my-4 d-flex align-items-center justify-content-center flex-column">
                <h5 className="display-4 text-center mb-4">اختر رسالتك</h5>
                <div className="row w-100 my-4 d-flex justify-content-center">
                    <div className="col-lg-3 mb-2">
                        <div className="ramadan-msg">
                            <p>{msg1}</p>
                            <Button variant="outlined" className={classes.ramadanMsgBtn} onClick={()=> changeMsg('1')}>اختر هذه التهنئة</Button>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2">
                        <div className="ramadan-msg">
                            <p>{msg2}</p>
                            <Button variant="outlined" className={classes.ramadanMsgBtn} onClick={()=> changeMsg('2')}>اختر هذه التهنئة</Button>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2">
                        <div className="ramadan-msg">
                            <p>{msg3}</p>
                            <Button variant="outlined" className={classes.ramadanMsgBtn} onClick={()=> changeMsg('3')}>اختر هذه التهنئة</Button>
                        </div>
                    </div>
                </div>
                <div className="row w-100 mt-4 d-flex justify-content-center">
                    <div className="col-lg-3 mb-2">
                        <div className="ramadan-msg">
                            <p>{msg4}</p>
                            <Button variant="outlined" className={classes.ramadanMsgBtn} onClick={()=> changeMsg('4')}>اختر هذه التهنئة</Button>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2">
                        <div className="ramadan-msg">
                            <p>{msg5}</p>
                            <Button variant="outlined" className={classes.ramadanMsgBtn} onClick={()=> changeMsg('5')}>اختر هذه التهنئة</Button>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2">
                        <div className="ramadan-msg">
                            <p>{msg6}</p>
                            <Button variant="outlined" className={classes.ramadanMsgBtn} onClick={()=> changeMsg('6')}>اختر هذه التهنئة</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row w-100 mt-4 d-flex align-items-center justify-content-center flex-column">
                <h5 className="display-4 text-center mb-4">أو اكتب رسالتك الخاصة</h5>
                <FormControl className="w-100">
                    <InputLabel className={classes.inputLabel} id="demo-simple-select-label">رسالتك</InputLabel>
                    <Input onChange={(e)=> setMsg(e.target.value)} />
                </FormControl>
            </div>
            </div>
            <Snackbar open={open} close={handleClose} />
        </div>
    )
}
