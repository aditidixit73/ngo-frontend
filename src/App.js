
import './App.css';
import './mobile.css';
import { ProgressBar } from 'top-loading-progress-bar';
import Headertag from "./Components/Headertag";
import HomeSection from './Components/HomeSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Vision from './Components/Mission';
import { AdminLogin } from './Components/AdminLogin';
import AdminPanel from './Components/AdminPanel';
import About from './Components/About';
import Bodies from './Components/Bodies';
import Image from './Components/Image';
import { useEffect, useState } from 'react';
import { useLogin } from './context/AdminDetails';
import { ImageUpload } from './Components/imageupload';
import { SliderImage } from './Components/addImages';
import Donation from './Components/Donation';
import Video from './Components/Videos';
import { ActivityAdder } from './Components/ActivityAdder';
import Activity from './Components/Activity';
import Loading from './Components/Loading';

function App() {
  const [load, setload] = useState(false)
  const { getData, user,setGallery, setUser, getImages, getAbout, setAbout, getMission, setMission, slider, getBodies, setgenBody, getExeBodies, setexeBody, setSlider, getSlider } = useLogin()
  useEffect(() => {
    async function efunc() {
      setUser(await getData())
      setAbout(await getAbout())
      setMission(await getMission())
      setgenBody(await getBodies())
      setexeBody(await getExeBodies())
      await getSlider().then((res) => {
        setSlider(res)
      })
      await getImages().then((res) =>
        setGallery(res)
      )
    }
    // if(!user)
    efunc().then(() => { setload(true) })
  }, [])
  return (
    <>
      <ProgressBar height="5px" color="royalblue"></ProgressBar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Headertag />}>
            <Route index element={load ? <HomeSection />: <Loading/>} /> 
            <Route path='vision' element={<Vision />} />
            <Route path='activity' element={<Activity />} />
            <Route path='contact-us' element={<Contact />} />
            <Route path='about-us' element={<About />} />
            <Route path='regulatory-bodies' element={<Bodies />} />
            <Route path='donate' element={<Donation />} />
            <Route path='gallery/image' element={<Image />} />
            <Route path='gallery/video' element={<Video />} />
          </Route>
          <Route path='/adminpanel/login' element={<AdminLogin />}></Route>
          <Route path='/adminpanel' element={<AdminPanel />}>
          </Route>
          <Route path='adminpanel/add/body' element={<ImageUpload />}></Route>
          <Route path='adminpanel/add/activity' element={<ActivityAdder type=""/>}></Route>
          <Route path='adminpanel/add/featactivity' element={<ActivityAdder type="feat"/>}></Route>
          <Route path='adminpanel/add/sliderimage' element={<SliderImage type="slider" />}></Route>
          <Route path='adminpanel/add/imagegallery' element={<SliderImage type="gallery" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
