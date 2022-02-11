// import prevBtn from "../assets/img/common/slide_prev_btn.png";

export default function SlideButton({ direction, onClick }) {
    return (
        <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
            {/* <img src={prevBtn} alt="이전 슬라이드 이미지" style={{display: "inline-block"}} width="16px" height="16px" /> */}
        </button>
    );
}