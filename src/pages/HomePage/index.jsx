import React, { useState, useEffect } from 'react'
import meetingImg from '../../assets/images/home.jpg'
import './index.css'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios';
import { getEvent } from '../../redux/actions/event';
import Navbar from '../../components/navbar'

const Homepage = (props) => {
   const dispatch = useDispatch()
   const stateEvent = useSelector(state => state.event)
   const [form, setForm] = useState({
      title: "",
      location: "",
      participant: "",
      date: "",
      note: "",
      picture: {},
   })

   const hiddenFileInput = React.useRef(null);

   const handleClick = event => {
      hiddenFileInput.current.click();
   };

   const handleDate = () => {
      let dateSplit = form.date.split("-")
      let month = "";
      switch (dateSplit[1]) {
         case "01": month = "Januari"
            break;
         case "02": month = "Februari";
            break;
         case "03": month = "Maret";
            break;
         case "04": month = "April";
            break;
         case "05": month = "Mei";
            break;
         case "06": month = "Juni";
            break;
         case "07": month = "Juli";
            break;
         case "08": month = "Agustus";
            break;
         case "09": month = "September";
            break;
         case "10": month = "Oktober";
            break;
         case "11": month = "November";
            break;
         case "12": month = "Desember";
            break;
         default: month = "undefined";
      }
      let date = `${dateSplit[2]} ${month} ${dateSplit[0]}`
      return date
   }

   const submitEvent = (e) => {
      e.preventDefault();
      const linkApi = 'http://localhost:8001/add';
      let formData = new FormData();
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("date", handleDate());
      formData.append("note", form.note);
      formData.append("image", form.picture);
      const configHeader = {
         headers: {
            "content-type": "multipart/form-data",
            // "x-access-token":
            // "Bearer toke",
         }
      };

      Axios.post(linkApi, formData, configHeader)
         .then(() => {
            alert("Successfully Added Event..!");
            props.history.push("/list")
         })
         .catch((err) => { console.log(err) })
   }

   useEffect(() => {
      const linkApi = 'http://localhost:8001/?page=1&limit=100';
      Axios.get(linkApi)
         .then(res => {
            dispatch(getEvent(res.data.data))
         })
         .catch(err => console.log(err))
   }, [])

   return (
      <>
         <Navbar />
         <div>
            <div className="container-main">
               <div className="row no-gutters">
                  {/* form */}
                  <div className="col-12 col-lg-6 bg-info">
                     <div className="container-form">
                        <h5>+ Add Event</h5>
                        <form onSubmit={submitEvent}>
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <input required type="text" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} className="form-control" id="title" />
                              </div>
                              <div className="form-group col-md-6">
                                 <input required type="text" placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} className="form-control" id="locataion" />
                              </div>
                           </div>
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <input required type="text" placeholder="Participant" onChange={(e) => setForm({ ...form, participant: e.target.value })} className="form-control" id="participant" />
                              </div>
                              <div className="form-group col-md-6">
                                 <input required type="date" placeholder="Date" onChange={(e) => setForm({ ...form, date: e.target.value })} className="form-control" id="date" />
                              </div>
                           </div>
                           <div className="form-group">
                              <textarea className="form-control" onChange={(e) => setForm({ ...form, note: e.target.value })} id="note" placeholder="Note" ></textarea>
                           </div>
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <div className="custom-file">
                                    <input type="file" ref={hiddenFileInput} style={{ display: "none" }} onChange={(e) => setForm({ ...form, picture: e.target.files[0] })} className="custom-file-input" id="customFile" />
                                    <button type="button" className="btn btn-block btn-light" onClick={handleClick}>Upload Picture</button>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                     </div>
                  </div>
                  {/* image */}
                  <div className="col-12 col-lg-6 bg-info d-flex justify-content-center align-items-center">
                     <div className="img-meeting">
                        <img src={meetingImg} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Homepage