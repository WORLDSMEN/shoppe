import React, { useEffect, useState } from 'react'
import { Avatar1, AvatarImg, AvatarImg1, CenterImage, CenterMainDiv, CheckBox, ChexboxAndTextDiv, ComentInp, Coments, ComentsText, Comment, CommentInpDiv, CommentName, COmmentName2, CommentParagraf, Conteyner, Date, EmailInp, FormDiv, ForstComment, ForstTextDiv, ForstTextPi, ForstTextPi1, ForstTextPi2, HR, Image11, InputDiv, Label, Li, LongDIv, Lorem, LoremDiv, ManinDiv, MuiFacebookIcon, MuiInstagramIcon, MuiReplyIcon, MuiTwitterIcon, Name, NameInp, PostComment, ReplyComment, ReplyDiv, ReplyH1, ReplyIconAndTextDiv, ReplyIconAndTextDiv2, ReplyPi, ReplyPi1, SecondComment, ShareDiv, Span, SpanReply, TagsDiv, TagsPi, Title, TitleDiv, TitleH1, TitlePi, TopTrends, TopTrendsH1, Ul, WebsiteInp } from './style'


//import image
// import CenterImg from '../BlogSingle/image/Center-img.png'
// import Image1 from '../BlogSingle/image/Image.png'
// import AvatarImage1 from '../BlogSingle/image/AvatarImg1.png'
// import AvatarImage2 from '../BlogSingle/image/AvatarImg2.png'
// import AvatarImage3 from '../BlogSingle/image/AvatarImg1.png'
// import axios from 'axios'

// import MyData
import { Comment11 } from './Data/BlogData'
import { Blogdata1 } from './Data/BlogData'
import { Blogdata2 } from './Data/BlogData'

// console.log(Comment11);


// const API_blog_single = 'http://10.10.7.109:8000/api/get-blog/5/'
// const API_top_trends = 'http://10.10.7.109:8000/api/get-toptrends/'
// const API_comment_post = 'http://10.10.7.109:8000/api/post-reply/'


const BlogSingle = () => {
  // const params = useParams()

  const [data, setData] = useState({})
  const [data2, setData2] = useState({})


  //Post ============================
  const [Name1, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Website, setWebsite] = useState('')
  const [Comment1, setComment] = useState('')
 

 
  


  //Beckend Post =========
  // function SendComment() {
  //   var data9 = new FormData();
  //   data9.append('reply_to', '8');
  //   data9.append('first_name', Name1);
  //   data9.append('website',Website);
  //   data9.append('comment', Comment1);
  //   data9.append('email', Email);


  //   var config = {
  //     method: 'post',
  //     url: 'http://10.10.7.109:8000/api/post-reply/',
  //     headers: { 
  //       'Authorization': 'token e1a8d41f35456494ef403f54a90499afb15f690e', 
  //     },
  //     data : data9
  //   };

  //   axios(config)
  //   .then(function (response) {
  //     console.log(response.data);
  //     setName('')
  //     setEmail('')
  //     setWebsite('')
  //     setComment('')
  //   })
    
  // }

 
  return (
    <ManinDiv>
      <CenterMainDiv>
        <TitleDiv>
          <TitleH1>{Blogdata1.title}</TitleH1>
          <TitlePi>by <Span>ANNY JOHNSON</Span> - October 8,2020</TitlePi>
        </TitleDiv>
        <CenterImage src={Blogdata1.forstImg}/>
        <LongDIv>
          <ForstTextDiv>
            <ForstTextPi1>{Blogdata1.paragraf}</ForstTextPi1>
            {/* <ForstTextPi2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</ForstTextPi2> */}
          </ForstTextDiv>
          <Image11 src={Blogdata1.secondImg} alt='xato'/>
          <TopTrends>
            <TopTrendsH1>{Blogdata2.title}</TopTrendsH1>
          </TopTrends>
          <LoremDiv>
            <Lorem>{Blogdata2.paragraf}</Lorem>
          </LoremDiv>
          <Ul > 
            {
              Blogdata2.liArr?.map((item,index)=>{
                return(
                  <Li key={index}>{item}</Li> 
                )
              })
            }
          </Ul>
          <Conteyner>
            <TagsDiv>
              <TagsPi><Span>Tages</Span><HR/> Fashion, Style, Season</TagsPi>
            </TagsDiv>
            <ShareDiv>
              <TagsPi><Span>Share</Span><HR/>  <MuiFacebookIcon/> <MuiInstagramIcon /> <MuiTwitterIcon /> </TagsPi>
            </ShareDiv>
          </Conteyner>
          <FormDiv>
            <ReplyDiv>
              <ReplyH1>Leave a reply</ReplyH1>
              <ReplyPi>Your email address will not be published. Required fields are marked *</ReplyPi>
            </ReplyDiv>
            <InputDiv>
              <NameInp required placeholder='Enter your name*' value={Name1} onChange={(e)=> setName(e.target.value)} type='text' />
              <EmailInp required placeholder='Enter your Email*' value={Email} onChange={(e)=> setEmail(e.target.value)}  type='email' />
              <WebsiteInp  required placeholder='Enter your Website' value={Website} onChange={(e)=> setWebsite(e.target.value)}  type='text' />
              <ChexboxAndTextDiv>
                <CheckBox type='checkbox'/>
                <ReplyPi1>Save my name, email, and website in this browser for the next time I comment</ReplyPi1>
              </ChexboxAndTextDiv>
              <CommentInpDiv>
                <Label>Your Comment*</Label>
                <ComentInp required value={Comment1} onChange={(e)=> setComment(e.target.value)}  type='text' />
              </CommentInpDiv>
            </InputDiv>
            <PostComment variant='contained'>POST COMMENT</PostComment>
          </FormDiv>
          <Coments>
            <ComentsText>Coments(3)</ComentsText>

            {
              Comment11?.map((item,index)=>{
                return(
                  <ForstComment key={index}>
                      <Avatar1>
                        <AvatarImg1 src={item.img} />
                      </Avatar1>
                      <Comment>
                        <CommentName>
                        <Name>{item.name}<Date>{item.data}</Date> </Name>
                          {/* <Date>6 May, 2020</Date> */}
                          <ReplyIconAndTextDiv>
                            <MuiReplyIcon />
                            <ReplyComment>Reply</ReplyComment> 
                          </ReplyIconAndTextDiv>
                        </CommentName>
                        <CommentParagraf>
                          <ReplyComment>{item.comment}</ReplyComment>
                        </CommentParagraf>
                      </Comment>
                  </ForstComment>
                )
              })
            }

          </Coments>
        </LongDIv>
      </CenterMainDiv>
    </ManinDiv>
  )
}

export default BlogSingle
