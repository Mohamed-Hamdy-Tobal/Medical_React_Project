import React from 'react'
import './BlogDetails.css'
import Banner from '../../Banner/Banner'
import blogDoc from './../../../imgs/blog/2.jpg'
import doc from './../../../imgs/doctors/2.jfif'
import doc1 from './../../../imgs/blog/pic2.2c21a722397dfc7d2854.jpg'
import doc2 from './../../../imgs/news/44.jpg'
import post1 from './../../../imgs/news/7.jpg'
import post2 from './../../../imgs/news/3.jpg'
import post3 from './../../../imgs/news/1.jpg'
import post4 from './../../../imgs/news/8.jpg'
import post5 from './../../../imgs/news/10.jpg'
import post6 from './../../../imgs/news/9.jpg'
import { Link } from 'react-router-dom'


const BlogDetail = () => {
    return (
        <>
            <Banner bannerTitle="Blog Details" path="Blog Details"/>
            <div className="blog-details section-sp1 bg-white">
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-12 col-lg-7 col-xl-8' style={{marginBottom: '0 !important'}}>
                            <div className='blog-card blog-single'>
                                <div className='post-media'>
                                    <img src={blogDoc} alt='blog'/>
                                </div>
                                <div className='info-bx'>
                                    <ul class="post-meta">
                                        <li class="author"><Link to="/blogs/blog-details"><img src={doc} alt="df"/> Sonar Moyna</Link></li>
                                        <li class="date"><i class="fa fa-calendar"></i> 19 July 2021</li>
                                    </ul>
                                </div>
                                <div class="ttr-post-title">
                                    <h2 class="post-title">Precious Tips To Help You Get Better.</h2>
                                </div>
                                <div className='ttr-post-text'>
                                    <p className='p-blog'>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                                    <blockquote class="wp-block-quote"><i class="fa fa-quote-left q-left"></i><p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p></blockquote>
                                        <p className='p-blog'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <ul className='wp-block-gallery columns-6 is-cropped'>
                                        <li className='blocks-gallery-item'>
                                            <img src={doc1} alt='j'/>
                                        </li>
                                        <li className='blocks-gallery-item'>
                                            <img src={doc2} alt='j'/>
                                        </li>
                                    </ul>
                                    <p className='p-blog'>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                                    <p className='p-blog'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div class="ttr-post-footer">
                                    <div class="post-tags">
                                        <strong>Tags:</strong>
                                        <Link to="/blogs/blog-details">Health</Link>
                                        <Link to="/blogs/blog-details">Growth</Link>
                                        <Link to="/blogs/blog-details">Life</Link>
                                    </div>
                                    <div class="share-post ml-auto">
                                        <ul class="social-media mb-0">
                                            <li><strong>Share:</strong></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://www.facebook.com/"><i class="fa fa-facebook"></i></Link></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://www.instagram.com/"><i class="fa fa-google"></i></Link></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://www.linkedin.com/"><i class="fa fa-twitter"></i></Link></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://twitter.com/"><i class="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='author-box blog-user mb-50'>
                                <div className='author-profile-info'>
                                    <div className='author-profile-pic'>
                                        <img src={doc1} alt='fl'/>
                                    </div>
                                    <div className='author-profile-content'>
                                        <h5>Sonar Z. Moyna</h5>
                                        <p className="mb-20">Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                                        <ul className="social-media mb-0">
                                            <li><Link rel="noreferrer" target="_blank" to="https://www.facebook.com/"><i class="fa fa-facebook"></i></Link></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://www.instagram.com/"><i class="fa fa-google"></i></Link></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://www.linkedin.com/"><i class="fa fa-twitter"></i></Link></li>
                                            <li><Link rel="noreferrer" target="_blank" to="https://twitter.com/"><i class="fa fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-12 col-lg-5 col-xl-4'>
                            <aside className='side-bar sticky-top aside-bx'>
                                <div class="widget_search mb-4">
                                    <form class="searchform">
                                        <div class="input-group">
                                            <input name="text" class="form-control" placeholder="Enter your keywords..." type="text"/>
                                            <div class="input-group-btn">
                                                <button type="submit" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="widget recent-posts-entry">
                                    <h4 class="widget-title">Recent Posts</h4>
                                    <div class="widget-post-bx">
                                        <div class="widget-post clearfix">
                                            <div class="ttr-post-media"> 
                                                <img src={post1} width="200" height="143" alt=""/>
                                            </div>
                                            <div class="ttr-post-info">
                                                <div class="ttr-post-header">
                                                    <h6 class="post-title"><Link to="/blogs/blog-details">Precious Tips To Help You Get Better.</Link></h6>
                                                </div>
                                                <ul class="post-meta">
                                                    <li class="date"><i class="far fa-calendar-alt"></i> 21 July 2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="widget-post clearfix">
                                            <div class="ttr-post-media"> 
                                            <img src={post2} width="200" height="160" alt=""/>
                                            </div>
                                            <div class="ttr-post-info">
                                                <div class="ttr-post-header">
                                                    <h6 class="post-title"><Link to="/blogs/blog-details">Ten Doubts You Should Clarify About.</Link></h6>
                                                </div>
                                                <ul class="post-meta">
                                                    <li class="date"><i class="far fa-calendar-alt"></i> 20 July 2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="widget-post clearfix">
                                            <div class="ttr-post-media"> 
                                                <img src={post3} width="200" height="160" alt=""/> 
                                            </div>
                                            <div class="ttr-post-info">
                                                <div class="ttr-post-header">
                                                    <h6 class="post-title"><Link to="/blogs/blog-details">The 10 Steps Needed For Putting.</Link></h6>
                                                </div>
                                                <ul class="post-meta">
                                                    <li class="date"><i class="far fa-calendar-alt"></i> 19 July 2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget widget_gallery gallery-grid-3">
                                    <h4 class="widget-title">Our Gallery</h4>
                                    <div class="magnific-image ">
                                        <div><img src={doc1} alt=""/></div>
                                        <div><img src={doc2} alt="" class="hoverZoomLink"/></div>
                                        <div><img src={post3} alt=""/></div>
                                        <div><img src={post4} alt="" class="hoverZoomLink"/></div>
                                        <div><img src={post5} alt="" class="hoverZoomLink"/></div>
                                        <div><img src={post6} alt=""/></div>
                                    </div>
                                </div>
                                <div class="widget widget_tag_cloud">
                                    <h4 class="widget-title">Tags</h4>
                                    <div class="tagcloud">
                                        <Link to="/blogs/blog-details">Improvement</Link>
                                        <Link to="/blogs/blog-details">Health</Link>
                                        <Link to="/blogs/blog-details">Life</Link>
                                        <Link to="/blogs/blog-details">Covid</Link>
                                        <Link to="/blogs/blog-details">Healthy</Link>
                                        <Link to="/blogs/blog-details">Growth</Link>
                                        <Link to="/blogs/blog-details">Education</Link>
                                        <Link to="/blogs/blog-details">Manage</Link>
                                        <Link to="/blogs/blog-details">General</Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail
