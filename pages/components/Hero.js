import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";
import colors from "../../utils/colors";
import Header from "./Header";

export default function Home() {
  return (
    <Container>
      <Header />

      <Hero>
        <div className="catch--phrase">
          <img src="/images/hero_arrow.svg" alt="" className="arrow" />
          <img src="/images/hero_arrow2.svg" alt="" className="arrow2" />
          <h1>Grow your skills to advance your career path</h1>
          <p>
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </p>

          <section className="btns--container">
            <button className="btn1">
              <span>Get Started Now</span>
              <FiArrowUpRight className="arrow" size={20} />
            </button>
            <button className="btn2">Enroll Now</button>
          </section>

          <section className="previews--container">
            <div className="previewImage">
              <img src="/images/previews.svg" alt="image" />
            </div>
            <p>
              <span>255K</span>
              <span>Previews</span>
            </p>
          </section>
        </div>
        <div className="image"></div>
      </Hero>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.primary};
`;

const Hero = styled.section`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow-y: visible;
  padding-left: 7.5rem;
  @media screen and (max-width: 1023px) {
      flex-direction: column;
      padding-inline: 1rem;
      height: 100vh;
      justify-content: flex-start ;
  }
  .arrow {
    position: absolute;
    right: 50%;
    bottom: 20%;
    transform: scale(0.8);
    @media screen and (max-width: 1023px) {
        display: none;
    }
  }
  .arrow2 {
    position: absolute;
    right: 10%;
    bottom: 55%;
    display: none;
    @media screen and (max-width: 1023px) {
        display: block;
    }
  }
  .catch--phrase {
    height: auto;
    width: 40%;
    padding-top: 6.05rem;
    padding-bottom: 12.188rem;
    background-image: url("/images/hero_dots.svg");
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (max-width: 1023px) {
      width: 100%;
      padding-top: 1.625rem;
      text-align: center;
      padding-bottom: 2.938rem;
    }
    h1 {
      font-family: "ClashDisplay", sans-serif;
      font-size: 4rem;
      color: white;
      line-height: 82px;
      @media screen and (max-width: 1023px) {
        font-size: 2rem;
        line-height: 2.861rem;
      }
    }
    p {
      color: #e7e7e7;
      font-size: 1rem;
      text-transform: capitalize;
      line-height: 26px;
      @media screen and (max-width: 1023px) {
        margin-top: 0.558rem;
        font-size: 0.5rem;
        line-height: 0.97rem;
      }
    }
    .btns--container {
      width: 100%;
      display: flex;
      margin-top: 2rem;
      @media screen and (max-width: 1023px) {
        justify-content: center;
        gap: 0.838rem;
        margin-top: 1.648rem;
      }
      .btn1 {
        padding-inline: 2rem;
        padding-block: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 1px solid white;
        color: white;
        font-weight: 700;
        border-radius: 4px;
        @media screen and (max-width: 1023px) {
          padding-block: 0.5rem;
          padding-inline: 1rem;
          font-size: 0.5rem;
        }
      }
      .btn2 {
        padding-inline: 2rem;
        padding-block: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border: 1px solid white;
        color: ${colors.primary};
        border-radius: 4px;
        font-weight: 700;
        margin-left: 1.5rem;
        @media screen and (max-width: 1023px) {
          margin: 0;
          padding-block: 0.5rem;
          padding-inline: 1rem;
          font-size: 0.5rem;
        }
        span {
          padding-left: 0.2rem;
        }
      }
    }
    .previews--container {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      margin-top: 1.5rem;
      @media screen and (max-width: 1023px) {
        justify-content: center;
        margin-top: 1.104rem;
      }
      .previewImage {
        width: 224px;
        height: 64px;
        @media screen and (max-width: 1023px) {
          width: 7.563rem;
          height: 2rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0.2rem;
        span {
          display: block;
          font-size: 1rem;
          @media screen and (max-width: 1023px) {
            font-size: 0.5rem;
          }

          &:nth-child(1) {
            font-family: "ClashDisplay";
            font-size: 2.188rem;
            font-weight: 700;
            color: white;
            @media screen and (max-width: 1023px) {
              font-size: 0.838rem;
            }
          }
        }
      }
    }
  }
  .image {
    width: 60%;
    height: 55.5rem;
    align-self: flex-end;
    background-image: url("/images/hero_image.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    @media screen and (max-width: 1023px) {
      width:100%;
      height: 100%;
      background-size: contain;
    }
  }
`;
