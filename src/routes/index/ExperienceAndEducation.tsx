import { Globe } from "react-bootstrap-icons"
import PProjLink from "../../components/project-entry-utils/PProjLink.tsx"
import { compileTimeRegexProject } from "../../project_entries/constant-regex/compile-time-regex.tsx"

export default function ExperienceAndEducation() {
  return (
    <>
      <div className={"mb-4"}>
        <h1 className={"display-3"}>Experience</h1>
        <h2 className={"mb-0"}>
          Trio Motion Technology{" "}
          <a href={"https://triomotion.com/"} target={"_blank"}>
            <Globe size={"20px"} />
          </a>
        </h2>
        <small className="text-body-secondary">
          2025 - 2026 | Year-Long Professional Placement
        </small>
        <p className={"mt-2"}>
          A year-long placement rotating around the Software, Hardware, and
          Applications departments giving me a broad overview of both the
          process of creating and maintaining hardware products, and of
          industrial automation in general.
        </p>
        <p>
          The majority of my time was spent in Software, doing both low-level
          programming working on the bare-metal operating system in C, and high
          level creating tests and internal tools in Python.
        </p>
        <p>
          <a href={"Placement-Poster-Robert-Lucas.pdf"} target={"_blank"}>
            See Poster
          </a>
        </p>
        <h2 className={"mb-0"}>
          Private English, Maths, & Computer Science Tutoring
        </h2>
        <small className="text-body-secondary">
          2023 - 2025 | For A-Level, GCSEs, and SATs
        </small>
        <p className={"mt-2"}>
          Creating and teaching tailored lesson plans for SATs, GCSE, and
          A-Level students in English, mathematics, and computer science to
          complement in-class work, helping them improve upon their weaknesses
          and reinforce their strengths.
        </p>
        <h2 className={"mb-0"}>
          Vestcom{" "}
          <a href={"https://vestcom.com/"} target={"_blank"}>
            <Globe size={"20px"} />
          </a>
        </h2>
        <small className="text-body-secondary">
          June 2021 (4 weeks) | Software Development Internship
        </small>
        <p className={"mt-2"}>
          Learning about the structure of a software company (including
          marketing, project management and software development) and gaining an
          understanding of how a complex full-stack system (iRex M3) can be
          created and maintained through multiple meetings with the founder of
          iRex and CGO of Vestcom. The last two weeks were spent as a tester
          alongside the development team whilst continuing to learn about the
          company.
        </p>
      </div>
      <div className={"mb-4"}>
        <h1 className={"display-3"}>Education</h1>
        <h2 className={"mb-0"}>Computer Science - University of Bath</h2>
        <small className="text-body-secondary">
          2023 - 2027 | BSc (Hons) Computer Science with Professional Placement
        </small>
        <p className={"mt-2"}>
          Attained a first for Year 1 finishing in the top twenty-five students
          for the year. Modules taken:
        </p>
        <ul>
          <li>
            <b>Programming 1 & 2</b>: Object-oriented, imperative, and
            functional programming. Individual tasks and group project
            management and execution using the Agile methodology. Achieved the
            maximum contribution score awarded by other group members in all
            applicable projects due to a willingness to take a leadership role
            and go above and beyond in time dedication to the project.
          </li>
          <li>
            <b>Artificial Intelligence</b>: Fundamentals of AI including ethical
            considerations, algorithms, and probability with Bayesian Networks.
            Created a full neural network with backpropagation and k-fold
            cross-validation for the final coursework.
          </li>
          <li>
            <b>Discrete Mathematics and Databases</b>: Sets, functions,
            relations, finite state machines, propositional and predicate
            calculus. Relational algebra, design, queries, injection attacks and
            legal considerations for databases.
          </li>
          <li>
            <b>Computational Mathematics</b>: Linear algebra, series, elemental
            number theory, and mathematical foundations of cryptography
            including public key cryptography.
          </li>
        </ul>
        <p>Attained a first for Year 2. Modules taken:</p>
        <ul>
          <li>
            <b>Software Engineering</b>: Large-group software engineering taking
            a project from design and research to a completed solution.
          </li>
          <li>
            <b>Algorithms and Complexity</b>: Complexity classes, languages
            (inspiration for my{" "}
            <PProjLink to={compileTimeRegexProject}>
              compile time regex engine
            </PProjLink>
            ), computations, and algorithms (sorting, hashing, etc.)
          </li>
          <li>
            <b>Machine Learning</b>: Supervised and unsupervised, CNNs, LSTMs,
            RNNs, ResNets, and ML Ops both in theory and practical applications
          </li>
          <li>
            <b>Visual Computing</b>: Convolutions, homographies, feature
            detection, matching, optical flow, and the graphics pipeline
          </li>
          <li>
            <b>Human-Computer Interaction</b>: Human perception, human behaviour
            patterns, interface design principles, heuristics, conducting user
            studies design,
          </li>
        </ul>
        <p>
          Year 3 will include a year-long project, reinforcement learning, logic
          and semantics, computational complexity, advanced computer graphics,
          and advanced computer vision.
        </p>
        <h2 className={"mb-0"}>Mark Rutherford Sixth Form</h2>
        <small className="text-body-secondary">
          2021 - 2023 | A in Maths, Further Maths, Computer Science, and Physics
        </small>
        <p className={"mt-2"}>
          A in Mathematics, Further Mathematics, Physics, and Computer Science.
          Founded and ran a STEM club for younger years during this time.
        </p>
        <h2>Awards</h2>
        <p>Year 13 (2022 – 2023)</p>
        <ul>
          <li>
            National Cyber Awards – Cyber Student of the Year Finalist
            <br />
            <a
              href={"https://thenationalcyberawards.org/2022-finalists/"}
              target={"_blank"}
            >
              https://thenationalcyberawards.org/2022-finalists/
            </a>
          </li>
          <li>UKMT Senior Maths Challenge – GOLD</li>
        </ul>
        <p>Year 12 (2021 – 2022)</p>
        <ul>
          <li>UKMT Senior Maths Challenge – SILVER</li>
          <li>Bebras Challenge – Distinction</li>
          <li>Extended Project Qualification (Computer Science) – A*</li>
        </ul>
        <p>Year 11 (2020 – 2021)</p>
        <ul>
          <li>UKMT Intermediate Maths Challenge – Gold</li>
        </ul>
      </div>
    </>
  )
}
