import { Inspirations, InspirationLink } from "../components";

export function Implement() {
  const links: InspirationLink[] = [
    { year: 2020, teamName: "Calgary", pageName: "Implement" },
    { year: 2020, teamName: "Toulouse_INSA-UPS", pageName: "Implement" },
    { year: 2020, teamName: "TUDelft", pageName: "Implement" },
    { year: 2020, teamName: "Lambert_GA", pageName: "Implement" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Sustainable Development</h4>
            <p>
              The Sustainable Development Goals (SDGs) are a call to action to
              integrally address global environmental, social, and economic
              challenges. As the future leaders of synthetic biology research
              and innovation, it’s your responsibility to participate in the
              global conversations to help develop solutions towards meeting the
              SDGs. We encourage you to demonstrate how you have evaluated your
              project ideas against one or more of the SDGs, how you’ve
              consulted with SDG stakeholders, and how you’ve begun to form
              collaborations with other iGEM teams around the SDGs. You’re
              encouraged to look back at previous iGEM projects to evaluate them
              against the SDGs and build upon them.
            </p>
            <p>
              To compete for the Best Sustainable Development prize, select the
              prize on the{" "}
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
