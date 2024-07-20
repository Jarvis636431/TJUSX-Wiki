import { Inspirations, InspirationLink } from "../components";

export function Members() {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "CU", pageName: "Members" },
    { year: 2019, teamName: "UANL", pageName: "Members" },
    { year: 2019, teamName: "William_and_Mary", pageName: "Members" },
    { year: 2020, teamName: "BOKU-Vienna", pageName: "Members" },
    { year: 2020, teamName: "CAU_China", pageName: "Team_Member" },
    { year: 2020, teamName: "Lethbridge", pageName: "Members" },
  ];

  return (
    <>
      <div className="row">
        <div className="col-8">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>
              Include pictures of your teammates, don't forget instructors and
              advisors!
            </li>
            <li>
              You can add a small biography or a few words from each team
              member, to tell us what you like, and what motivated you to
              participate in iGEM.
            </li>
            <li>
              Take team pictures! Show us your school, your lab and little bit
              of your city.
            </li>
            <li>
              Remember that image galleries can help you showcase many pictures
              while saving space.
            </li>
          </ul>
          <div className="bd-callout bd-callout-info">
            <strong>Important:</strong> Your wiki pages will be archived at the
            end of the iGEM season and this content will remain online. Please
            keep this in mind as you post photos and personal information on
            this page.
          </div>
        </div>
        <div className="col-4">
        <Inspirations inspirationLinkList={links} />
        </div>
      </div>
    </>
  );
}
