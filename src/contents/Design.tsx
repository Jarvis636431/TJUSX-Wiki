import { Inspirations, InspirationLink } from "../components";

export function Design() {
  const links: InspirationLink[] = [
    { year: 2020, teamName: "CCA_San_Diego", pageName: "Design" },
    { year: 2020, teamName: "Lambert_GA", pageName: "Design" },
    { year: 2020, teamName: "Stanford", pageName: "Design" },
    { year: 2020, teamName: "Waseda", pageName: "Design" },
    { year: 2020, teamName: "Fudan", pageName: "Design" },
    { year: 2020, teamName: "Toulouse_INSA-UPS", pageName: "Design" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Education</h4>
            <p>
              How have you developed new opportunities to include more people in
              shaping synthetic biology? Innovative educational tools and
              outreach activities have the ability to establish a two-way
              dialogue with new communities by discussing public values and the
              science behind synthetic biology. Document your approach and what
              was learned by everyone involved to compete for this award.
            </p>
            <p>
              To compete for the Best Education prize, select the prize on the{" "}
              <a href="https://competition.igem.org/deliverables/judging-form">
                judging form
              </a>{" "}
              and describe your work on this page.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/awards">
                2024 Awards Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
      <Inspirations inspirationLinkList={links} />
    </>
  );
}
