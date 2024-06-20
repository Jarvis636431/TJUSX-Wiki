import { Inspirations, InspirationLink } from "../components";

export function Description() {
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "Description" },
    { year: 2019, teamName: "ITESO_Guadalajara", pageName: "Description" },
    { year: 2020, teamName: "Technion-Israel", pageName: "Description" },
    { year: 2020, teamName: "Botchan_Lab_Tokyo", pageName: "Description" },
    { year: 2020, teamName: "St_Andrews", pageName: "Description" },
    { year: 2020, teamName: "MIT", pageName: "Description" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #3</h4>
            <p>Describe how and why you chose your iGEM project.</p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>A clear and concise description of your project.</li>
            <li>
              A detailed explanation of why your team chose to work on this
              particular project.
            </li>
            <li>References and sources to document your research.</li>
            <li>
              Use illustrations and other visual resources to explain your
              project.
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Project Description</h2>
          <hr />
          <p>
          The probiotic microbiota holds great potential for treating and alleviating gastrointestinal and gut-brain axis-related diseases. However, its limited intestinal colonization ability and complex microbial interactions restrict its therapeutic application. To overcome these limitations, we have engineered a superhero—<strong>Microbe Spidey</strong>, comprising <i>Escherichia coli Nissle</i> 1917(EcN) and <i>Lactococcus lactis F44</i>. This includes a biotin-affinity based <strong>gut adhesion system</strong> and a quorum sensing-based <strong>interaction system</strong>, allowing the probiotics to <stong>"weave webs" </stong>and adhere the gut as well as Spider-man. We aim to design genetic circuits to control the expression of mucin binding protein in EcN and facilitate inter-probiotic adhesion to control Microbe Spidey's <strong>"spider silk"</strong> in the gut. Additionally, we plan to endow Microbe Spidey with enhanced superpowers, so we are developing cell factories in <i>Lactococcus lactis F44</i> to express various therapeutic agents. Microbe Spidey will challenge the disease “monsters”—<strong>Parkinson's Disease</strong> (PD) and <strong>Inflammatory Bowel Disease</strong> (IBD) to validate its efficacy.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Some advice</h2>
          <hr />
          <p>
            We encourage you to put up a lot of information and content on your
            wiki, but we also encourage you to include summaries as much as
            possible. If you think of the sections in your project description
            as the sections in a publication, you should try to be concise,
            accurate, and unambiguous in your achievements. Your Project
            Description should include more information than your project
            abstract.
          </p>
        </div>
        <div className="col-lg-4">
          <h2>References</h2>
          <hr />
          <p>
            iGEM teams are encouraged to record references you use during the
            course of your research. They should be posted somewhere on your
            wiki so that judges and other visitors can see how you thought about
            your project and what works inspired you.
          </p>
        </div>
      </div>
    </>
  );
}
