import classNames from "classnames";


function Profile({Data,css,text}){
const{name,image,content}=Data;

    return(
        <div className={css}>
            <div>
                <img src={image} alt="profile-image" width="100px" height="100px" className=" rounded-full ml-auto mr-auto" />
            </div>
            <div className="title-content text-center">
              <h1 className="mt-2 font-bold font-[Poppins]">{name}</h1>
              <p className={'text-{text}'}>{content}</p>
            </div>
        </div>
    )
};export default Profile;