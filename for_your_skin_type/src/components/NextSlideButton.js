// import nextBtn from "../assets/img/common/slide_next_btn.png";

export default function SlideButton({ direction, onClick }) {
    return (
        <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
            {/* <img src={nextBtn} alt="다음 슬라이드 이미지" style={{display: "inline-block"}} width="16px" height="16px" /> */}
        </button>
    );
}