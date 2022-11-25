import { Link } from "react-router-dom";
import { dbRef } from "../database/db";
import { addDoc } from "firebase/firestore/lite";
import { useState } from "react";
const Upload = () => {
  const [state, setState] = useState("");
  const values = (e) => {
    //textarea에 value 접근state에저장
    setState(e.target.value);
  };
  const click = () => {
    if (state == "") {
      alert("???");
    } else {
      addDoc(dbRef, {
        like: state,
      }); //지정된 db컬렉션에 필드 타이틀:작성한 text 값 저장함수
    }
  };

  return (
    <div className="posting">
      <div className="box">
        <div>카테고리</div>
        <h3>게시글 등록</h3>
        <span>카메라 아이콘</span>
      </div>
      <div>
        <p>게시글의 주제가 무엇인가요?</p>
        <ul>
          <li>
            <span>#궁금해요</span>
          </li>
          <li>
            <span>#추천해요</span>
          </li>
          <li>
            <span>#동행후기</span>
          </li>
          <li>
            <span>#여행소식</span>
          </li>
        </ul>
      </div>
      <div>
        <img src="/img/1.jpg" alt="" width={"100%"} height={"50%"} />
      </div>
      <textarea name="" id="" cols="95" rows="10" onChange={values}></textarea>
      <div>
        <Link to="/Profile">
          <button className="posting_btn" onClick={click}>
            추가
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Upload;
