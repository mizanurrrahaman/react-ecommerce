import React, { useState } from 'react'
import Ratting from '../components/Ratting';

const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];


const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
   
  return (
    <>
      <ul className={`review-nav  lab-ul ${reviewShow ? "RevActive" : "DescActive" }`}>
          <li className='desc' onClick={() => setReviewShow(!reviewShow) }>Description </li>
          <li className='rev' onClick={() => setReviewShow(!reviewShow) }> Reviews 4 </li>
      </ul>
       <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
          <div className='review-showing'>
             <ul className='content lab-ul'>
                {
                    ReviewList.map((review, i) =>(
                        <li key={i}>
                           <div className='post-thumb'>
                               <img src={review.imgUrl} alt="" />
                           </div>
                            <div className='post-content'>
                               <div className='entry-meta'>
                                  <div className='posted-on'>
                                     <a href="#">{review.name}</a>
                                     <p>{review.date} </p>
                                  </div>
                               </div>
                                <div className='entry-content'>
                                    <p>{review.desc} </p>
                                </div>
                            </div>
                        </li>
                    ))
                }
             </ul>
             <div className='client-review'> 
                <div className='review-form'>
                   <div className='review-title'>
                       <h5>{reviwtitle} </h5>
                   </div>
                    <form action="action" className='row'>
                        <div className='col-md-4 col-12'>
                           <input type="text" name="name" id="name" placeholder="full Name *"/>
                        </div>
                        <div className='col-md-4 col-12'>
                           <input type="email" name="email" id="name" placeholder="Your Email *"/>
                        </div>
                         <div className='col-md-4 col-12'>
                            <div className='rating'>
                               <span className='me-2'>Your Rating </span>
                                <Ratting/>
                            </div>
                         </div>
                          <div className='col-md-12 col-12'>
                             <textarea name="message" id="message" rows="8" placeholder='Type Here Message'>
                             </textarea>
                          </div>
                          <div className='col-12'>
                             <button type='submit' className='default-button'>
                                <span>Submit Review </span>
                             </button>
                          </div>
                    </form>
                </div>
             </div>
          </div>
           <div className='description'>
             <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ut aliquam ipsum earum commodi aperiam fugiat modi illum, error nesciunt voluptatem animi, repellat quasi eius sed itaque perspiciatis! Sint distinctio nobis voluptas repudiandae dolores cumque tenetur recusandae hic, aspernatur expedita illo quaerat exercitationem nesciunt veritatis praesentium ipsum quidem voluptatum. Eos.
             </p>
              <div className='post-item'>
                 <div className='post-thumb'>
                    <img src="/src/assets/images/shop/01.jpg" alt="" />
                 </div>
              </div>
               <p>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed tempore at, modi ab quasi dolorem rem eaque vero iure, cumque assumenda laudantium! Fugiat, quam animi? Blanditiis architecto cum consectetur nostrum, numquam veniam earum dolorum corporis eaque dignissimos cumque eum dolor, rem, itaque sint? Voluptas assumenda quam porro sapiente vitae qui, minus eos corporis aut officiis incidunt ipsam harum. Vero?
               </p>
           </div>
       </div>
    </>
  )
}

export default Review