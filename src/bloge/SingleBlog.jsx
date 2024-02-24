import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
//import { HtmlTagDescri } from "vite";
import Tags from "../shop/Tags"
import PopularPost from "../shop/PopularPost"
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];


const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams()
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog/ Bloge Details"} />
      <div className="biog-section blog-single padding-tb section-bg">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item, index) => (
                          <div key={index}>
                            <div className="post-thumb">
                              <img
                                src={item.imgUrl}
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="post-content">
                              <h3>{item.title} </h3>
                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {item.metaList.map((val, i) => (
                                    <li key={i}>
                                      <i className={val.iconName}></i>
                                      {val.text}{" "}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Iste temporibus dolorem
                                doloremque adipisci asperiores, minus
                                repudiandae nam exercitationem doloribus
                                reprehenderit corporis maxime quia ducimus,
                                deserunt saepe dignissimos repellat. Velit ad
                                expedita aut cupiditate officiis modi ut,
                                dolor natus esse, recusandae doloremque
                                dolores a enim asperiores repellat, iusto
                                obcaecati exercitationem voluptatibus numquam
                                deleniti vel cumque voluptas. Ipsam vero ut
                                fuga explicabo!{" "}
                              </p>
                              <blockquote>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Repellendus molestias non
                                  soluta optio magni aut, suscipit tenetur,
                                  velit laudantium placeat dolorum minus
                                  reiciendis quo voluptas reprehenderit
                                  laboriosam quasi sapiente accusamus.{" "}
                                </p>
                                <cite>
                                  <a href="#">...Melissa Hunter</a>
                                </cite>
                              </blockquote>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur reiciendis
                                aspernatur dolores doloremque non recusandae
                                earum dicta, dolorum voluptas excepturi illum
                                corrupti sit laboriosam officia. Voluptatem,
                                modi dolores laboriosam laborum et, architecto
                                similique veniam culpa omnis necessitatibus
                                sequi molestias quasi explicabo natus eligendi
                                quaerat quas doloribus cumque facere eius
                                voluptate quisquam minima fuga ad! Ipsam enim
                                ipsa maiores similique velit?{" "}
                              </p>
                              <img
                                src="https://media.istockphoto.com/id/1455946567/photo/college-instructor-assisting-electrical-engineering-students.jpg?s=1024x1024&w=is&k=20&c=2aDFaIc6oBrONKWVq1W5QrMUCQSVB7T2jUraKw1zY3I="
                                alt=""
                              />
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quae quam quia neque
                                voluptatem quas totam blanditiis nulla
                                tempora. Neque animi blanditiis officia
                                consequuntur nesciunt. Vitae voluptatibus
                                dolores esse reiciendis, error molestias
                                praesentium facere amet exercitationem ad
                                pariatur neque! Ipsum dicta cupiditate
                                nesciunt qui et, dolorum est, labore rerum
                                minima sed facilis voluptates, perferendis
                                ratione. Voluptate accusamus reprehenderit
                                placeat eum dolor delectus nemo facilis porro
                                similique.{" "}
                              </p>
                              <div className="video-thumb">
                                <img
                                  src="https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=1024x1024&w=is&k=20&c=1EPVeG3gnxNIMfyc9bfcKZEvyv10SA6T0eB1uLRmwm8="
                                  alt=""
                                />
                                <a href="https://youtu.be/xTC_aAFEuRM?si=SMRS8PmoAMdAAq44" className="video-button popup" target="_blank">
                                  <i className="icofont-ui-play"> </i>
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Mollitia tempora id minus!
                                Accusantium laudantium suscipit dignissimos
                                vero. Alias dolor itaque maxime, tenetur
                                cupiditate aperiam consequatur sapiente natus
                                enim nemo, exercitationem consectetur
                                aspernatur delectus. Similique ullam aliquid
                                sequi officiis dolor repellat non, voluptas
                                sed explicabo aliquam porro vel magni dolorum
                                blanditiis!
                              </p>
                               <div className="tags-section">
                                 <ul className="tags lab-ul">
                                   <li>
                                     <a href="#">Agency </a>
                                   </li>
                                   <li>
                                     <a href="#">Business </a>
                                   </li>
                                   <li>
                                     <a href="#">Personal</a>
                                   </li>
                                 </ul>
                                  <ul className="lab-ul social-icons">
                                     {
                                      socialList.map((val, i) =>(
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                     }
                                  </ul>
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                           <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title"> 
                         Evisculate Parallel Processes vai Technice Sound Models Authoritative
                        </a>
                      </div>
                       <div className="right">
                         <a href="#" className="prev">
                            <i className="icofont-double-right"></i> Previous Blog
                         </a>
                         <a href="#" className="title"> 
                         Evisculate Parallel Processes vai Technice Sound Models Authoritative
                        </a>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
           <div className="col-lg-4 col-12">
            <aside>
               <Tags/>
                <PopularPost/>
            </aside>   
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog



{/*
<div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item, index) => (
                          <div key={index}>
                            <div className="post-thumb">
                              <img
                                src={item.imgUrl}
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="post-content">
                              <h3>{item.title} </h3>
                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {item.metaList.map((val, i) => (
                                    <li key={i}>
                                      <i className={val.iconName}></i>
                                      {val.text}{" "}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Iste temporibus dolorem
                                doloremque adipisci asperiores, minus
                                repudiandae nam exercitationem doloribus
                                reprehenderit corporis maxime quia ducimus,
                                deserunt saepe dignissimos repellat. Velit ad
                                expedita aut cupiditate officiis modi ut,
                                dolor natus esse, recusandae doloremque
                                dolores a enim asperiores repellat, iusto
                                obcaecati exercitationem voluptatibus numquam
                                deleniti vel cumque voluptas. Ipsam vero ut
                                fuga explicabo!{" "}
                              </p>
                              <blockquote>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Repellendus molestias non
                                  soluta optio magni aut, suscipit tenetur,
                                  velit laudantium placeat dolorum minus
                                  reiciendis quo voluptas reprehenderit
                                  laboriosam quasi sapiente accusamus.{" "}
                                </p>
                                <cite>
                                  <a href="#">...Melissa Hunter</a>
                                </cite>
                              </blockquote>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur reiciendis
                                aspernatur dolores doloremque non recusandae
                                earum dicta, dolorum voluptas excepturi illum
                                corrupti sit laboriosam officia. Voluptatem,
                                modi dolores laboriosam laborum et, architecto
                                similique veniam culpa omnis necessitatibus
                                sequi molestias quasi explicabo natus eligendi
                                quaerat quas doloribus cumque facere eius
                                voluptate quisquam minima fuga ad! Ipsam enim
                                ipsa maiores similique velit?{" "}
                              </p>
                              <img
                                src="https://media.istockphoto.com/id/1455946567/photo/college-instructor-assisting-electrical-engineering-students.jpg?s=1024x1024&w=is&k=20&c=2aDFaIc6oBrONKWVq1W5QrMUCQSVB7T2jUraKw1zY3I="
                                alt=""
                              />
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quae quam quia neque
                                voluptatem quas totam blanditiis nulla
                                tempora. Neque animi blanditiis officia
                                consequuntur nesciunt. Vitae voluptatibus
                                dolores esse reiciendis, error molestias
                                praesentium facere amet exercitationem ad
                                pariatur neque! Ipsum dicta cupiditate
                                nesciunt qui et, dolorum est, labore rerum
                                minima sed facilis voluptates, perferendis
                                ratione. Voluptate accusamus reprehenderit
                                placeat eum dolor delectus nemo facilis porro
                                similique.{" "}
                              </p>
                              <div className="video-thumb">
                                <img
                                  src="https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=1024x1024&w=is&k=20&c=1EPVeG3gnxNIMfyc9bfcKZEvyv10SA6T0eB1uLRmwm8="
                                  alt=""
                                />
                                <a href="https://youtu.be/xTC_aAFEuRM?si=SMRS8PmoAMdAAq44" className="video-button popup" target="_blank">
                                  <i className="icofont-ui-play"> </i>
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Mollitia tempora id minus!
                                Accusantium laudantium suscipit dignissimos
                                vero. Alias dolor itaque maxime, tenetur
                                cupiditate aperiam consequatur sapiente natus
                                enim nemo, exercitationem consectetur
                                aspernatur delectus. Similique ullam aliquid
                                sequi officiis dolor repellat non, voluptas
                                sed explicabo aliquam porro vel magni dolorum
                                blanditiis!
                              </p>
                               <div className="tags-section">
                                 <ul className="tags lab-ul">
                                   <li>
                                     <a href="#">Agency </a>
                                   </li>
                                   <li>
                                     <a href="#">Business </a>
                                   </li>
                                   <li>
                                     <a href="#">Personal</a>
                                   </li>
                                 </ul>
                                  <ul className="lab-ul social-icons">
                                     {
                                      socialList.map((val, i) =>(
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                     }
                                  </ul>
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                           <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title"> 
                         Evisculate Parallel Processes vai Technice Sound Models Authoritative
                        </a>
                      </div>
                       <div className="right">
                         <a href="#" className="prev">
                            <i className="icofont-double-right"></i> Previous Blog
                         </a>
                         <a href="#" className="title"> 
                         Evisculate Parallel Processes vai Technice Sound Models Authoritative
                        </a>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
           <div className="col-lg-4 col-12">
            <aside>
               <Tags/>
                <PopularPost/>
            </aside>   
          </div>
        </div>
*/}