import { Inspirations, InspirationLink } from "../components";

export function Protcol() {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "UCopenhagen", pageName: "Protcol" },
    { year: 2019, teamName: "Thessaly", pageName: "Protcol" },
    { year: 2019, teamName: "NCKU_Tainan", pageName: "Protcol" },
    { year: 2020, teamName: "TAS_Taipei", pageName: "Protcol" },
    { year: 2020, teamName: "KCL_UK", pageName: "Protcol" },
    { year: 2020, teamName: "Calgary", pageName: "Protcol" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Supporting Entrepreneurship</h4>
            <p>
              The Best Supporting Entrepreneurship award recognizes exceptional
              effort to build a business case and commercialize an iGEM project.
              This award is open to all teams to show that entrepreneurship is
              something all teams can aspire to do with their project. This
              award can go to an new project, or to a previous project that a
              team aimed to commercialize. Have you filed a provisional patent
              on your project/device/process? Have you raised money to build and
              ship products? Have you pitched your idea to investors and
              received money? As always in iGEM, the aim is to impress the
              judges!
            </p>
            <p>
              To compete for the Best Supporting Entrepreneurship prize, select
              the prize on the{" "}
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

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Patents and intellectual property</h2>
          <hr />
          <p>
            If your team is seriously considering commercializing and looking
            into building a company after the competition, you may want to look
            at how you are going to protect your work and secure investment.
            Investors will usually require some form of intellectual protection,
            so you may want to investigate how to apply for a patent or
            provisional patent in your country and region before disclosing your
            project at iGEM. Remember that you can only be evaluated in iGEM
            based on what you share on your wiki and at the Jamboree, so any
            work you don't present can't count towards your project.
          </p>
          <p>
            This is an area where we are different as we care about sharing,
            openness and contributing to the community and investors don't
            always agree with these values. It is up to you and your team to
            decide what to do. Remember that most universities have a
            commercialization department and that you can talk to them before
            coming to a decision.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
