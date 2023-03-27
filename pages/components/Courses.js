import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";
import styled from "styled-components";
import colors from "../../utils/colors";

const navs = ["All Categories", "Design", "Development", "Marketing"];

const courses = [
  {
    image: "/images/course1.svg",
    category: "Design",
    star: "4.7k",
    like: "32.7+",
    title: "introduction to user research in ux design",
    time: "23hrs 50mins",
    lessons: "15",
    profile_pic: "/images/profile1.svg",
    name: "Leonard Victor",
    price: "$15.00",
  },
  {
    image: "/images/course2.svg",
    category: "Marketing",
    star: "4.7k",
    like: "8.7+",
    title: "introduction to  new marketing audience ",
    time: "22hrs 30mins",
    lessons: "22",
    profile_pic: "/images/profile2.svg",
    name: "Jeffery Williams",
    price: "$32.00",
  },
  {
    image: "/images/course3.svg",
    category: "Development",
    star: "4.7k",
    like: "12.7+",
    title: "introduction to html, css & bootstrap",
    time: "45hrs 50mins",
    lessons: "55",
    profile_pic: "/images/profile3.svg",
    name: "Claretta Mason",
    price: "$55.00",
  },
  {
    image: "/images/course4.svg",
    category: "Development",
    star: "4.7k",
    like: "32.7+",
    title: "introduction to javascript, git & GitHub",
    time: "30hrs 50mins",
    lessons: "22",
    profile_pic: "/images/profile4.svg",
    name: "Jessica Duke",
    price: "$45.00",
  },
  {
    image: "/images/course5.svg",
    category: "Marketing",
    star: "4.7k",
    like: "4.7+",
    title: "introduction to outroom  marketing analysis",
    time: "33hrs 50mins",
    lessons: "26",
    profile_pic: "/images/profile5.svg",
    name: "Samuel Jacobs",
    price: "$25.00",
  },
  {
    image: "/images/course6.svg",
    category: "Marketing",
    star: "4.7k",
    like: "15.7+",
    title: "introduction to live  marketing analysis",
    time: "10hrs 50mins",
    lessons: "32",
    profile_pic: "/images/profile6.svg",
    name: "Adam Smith",
    price: "$25.00",
  },
];
function Courses() {
  return (
    <Container>
      <Headers>
        <div className="star"></div>
        <h1>browse our popular courses</h1>
        <p className="desc">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <nav>
          {navs.map((nav, index) => (
            <div
              className="nav"
              key={index}
              style={{
                background: index == 0 ? "white" : "",
                color: index == 0 ? colors.primary : "",
                fontWeight: 700,
              }}
            >
              <p>{nav}</p>
            </div>
          ))}
        </nav>
      </Headers>

      <CoursesContainer>
        {courses.map((course, index) => (
          <section className="course" key={index}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="info">
              <div className="tag">{course.category}</div>
              <div className="rating">
                <span>
                  {course.star}
                  <BsFillStarFill color="#F6B435" size={13} />
                </span>
                <span>({course.like})</span>
              </div>
            </div>
            <h2>{course.title}</h2>
            <div className="timeline">
              <p className="time">
                <FiClock size={24} />
                <span>{course.time}</span>
              </p>
              <p className="book">
                <MdMenuBook size={24} />
                <span>{course.lessons} Lessons</span>
              </p>
            </div>

            <div className="instructor">
              <div className="name">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${course.profile_pic})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <h3>{course.name}</h3>
              </div>

              <p className="price">{course.price}</p>
            </div>
          </section>
        ))}
      </CoursesContainer>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <button className="explore">Explore All Courses</button>
        <button className="explore">View Courses</button>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: auto;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  @media screen and (max-width: 1023px) {
    padding-top: 2.079rem;
    padding-inline: 1rem;
    padding-top: 1.875rem;
  }
  button.explore {
    margin: 0 auto;
    padding-inline: 2rem;
    padding-block: 1rem;
    background-color: ${colors.primary};
    border-radius: 4px;
    border: 0;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 3.5rem;
    &:nth-child(1) {
      @media screen and (max-width: 1023px) {
        display: none;
      }
    }
    &:nth-child(2) {
      @media screen and (min-width: 1023px) {
        display: none;
      }
    }
    @media screen and (max-width: 1023px) {
      font-size: 0.5rem;
      padding-block: 0.5rem;
      padding-inline: 1rem;
      margin-top: 2rem;
      content: 12;
    }
  }
`;

const Headers = styled.header`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 3.5rem;
  position: relative;
  @media screen and (max-width: 1023px) {
    padding-bottom: 1.507rem;
  }
  .star {
    width: 3.125rem;
    height: 3.188rem;
    background: url("/images/courses_star.svg") no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 30%;
    left: 10%;
    @media screen and (max-width: 1023px) {
      width: 0.5rem;
      height: 0.5rem;
      background-size: cover;
      left: -2%;
      bottom: 0;
      top: -5%;
    }
  }
  h1 {
    font-family: "ClashDisplay";
    line-height: 4.291rem;
    color: #000f24;
    font-size: 3.5rem;
    @media screen and (max-width: 1023px) {
      font-size: 1.5rem;
      line-height: 1.845rem;
    }
  }
  p.desc {
    width: 50%;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${colors.text};
    margin: 0 auto;
    @media screen and (max-width: 1023px) {
      margin-top: 0.25rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.5rem;
      width: 100%;
      padding-inline: 4.528rem;
    }
  }
  nav {
    width: 50%;
    margin-top: 3.5rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    @media screen and (max-width: 1023px) {
      margin-top: 1rem;
      width: 100%;
      gap: 16px;
      padding-inline: 2.625rem;
    }
    .nav {
      padding: 0.75rem;
      border-radius: 4px;
      color: ${colors.text};
      font-size: 1rem;
      @media screen and (max-width: 1023px) {
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        font-size: 0.5rem;
      }
    }
  }
`;

const CoursesContainer = styled.section`
  width: 100%;
  height: auto;
  padding-inline: 7.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: 1023px) {
    padding-inline: 0;
  }
  .course {
    width: 30rem;
    height: 36rem;
    background-color: white;
    padding-block: 1rem;
    padding-inline: 1.25rem;
    text-transform: capitalize;
    border-radius: 1rem;
    @media screen and (max-width: 1023px) {
      height: auto;
      padding-top: 0.988rem;
    }
    .image {
      width: 100%;
      height: 18.25rem;
      border-radius: 4px;
      @media screen and (max-width: 1023px) {
        height: 15.313rem;
      }
    }
    .info {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1023px) {
        margin-top: 0.5rem;
      }
      .tag {
        padding-inline: 1.25rem;
        padding-block: 0.188rem;
        border-radius: 16px;
        background-color: #1e5dce33;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.primary};
        @media screen and (max-width: 1023px) {
          padding-inline: 1rem;
          padding-block: 0.5rem;
          font-size: 0.5rem;

          line-height: 0.338rem;
        }
      }
      .rating {
        font-weight: 700;
        color: ${colors.text};
        @media screen and (max-width: 1023px) {
          font-size: 0.5rem;
        }
        span:nth-child(1) {
          padding-right: 0.5rem;
          svg {
            width: 0.5rem;
            height: 0.5rem;
            color: green;
          }
        }
      }
    }

    h2 {
      margin-top: 1.5rem;
      font-family: "ClashDisplay";
      line-height: 1.845rem;
      font-size: 1.5rem;
      @media screen and (max-width: 1023px) {
        margin-top: 0.5rem;
        font-size: 1rem;
        line-height: 1rem;
      }
    }
    .timeline {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      @media screen and (max-width: 1023px) {
        margin-top: 0.344rem;
      }
      .time {
        font-size: 1rem;
        color: ${colors.text};
        display: flex;
        align-items: center;
        svg {
          @media screen and (max-width: 1023px) {
            width: 0.5rem;
          }
        }
        span {
          padding-left: 0.5rem;
          @media screen and (max-width: 1023px) {
            padding-left: 0.25rem;
            font-size: 0.5rem;
          }
        }
      }
      .book {
        color: ${colors.text};
        display: flex;
        align-items: center;
        svg {
          @media screen and (max-width: 1023px) {
            width: 0.5rem;
          }
        }
        span {
          padding-left: 0.5rem;
          @media screen and (max-width: 1023px) {
            font-size: 0.5rem;
            padding-left: 0.201rem;
          }
        }
      }
    }
    .instructor {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1023px) {
        margin-top: 1rem;
      }
      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        .img {
          width: 2.5rem;
          height: 2.5rem;
          background-color: gray;
          border-radius: 50%;
          @media screen and (max-width: 1023px) {
            width: 1rem;
            height: 1rem;
          }
        }
        h3 {
          margin-left: 0.5rem;
          padding: 0;
          font-size: 1rem;
          @media screen and (max-width: 1023px) {
            margin-left: 0.201rem;
            font-size: 0.375rem;
            line-height: 0.506rem;
          }
        }
      }
      .price {
        font-size: 1.25rem;
        font-family: "ClashDisplay";
        line-height: 1.538rem;
        font-weight: 700;
        color: ${colors.primary};
        display: flex;
        align-items: center;
        @media screen and (max-width: 1023px) {
          font-size: 0.5rem;
          line-height: 0.613rem;
        }
      }
    }
  }
`;
export default Courses;
