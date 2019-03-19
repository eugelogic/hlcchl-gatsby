import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import LayoutPage from '../components/layout-page/layout-page'
import Button from '../components/button/button'
import SEO from '../components/seo'

const ConstitutionPage = ({ data }) => (
  <LayoutPage pageTitle="Constitution">
    <SEO title="Constitution" />
    <p>Constitution for the Management Committee of the Holly Lodge Community Association [HLCA]</p>
    <p><strong>1. Name</strong></p>
    <p>The Holly Lodge Community Association  [HLCA]</p>
    <p><strong>2. The aims of the group shall be</strong></p>
    <p>HLCA aims to bring together service providers and residents to ensure that the voices of the local community are heard and that they influence the way in which services are planned and delivered, maintaining and improving the wellbeing of the residents.</p>
    <p><strong>The objectives of the HLCA</strong></p>
    <p>2.1  To provide opportunities for the residents and relevant statutory and voluntary sector partners to meet together to promote information exchange, networking and joint working.</p>
    <p>2.2  To act as a  consultation mechanism to collate the views and issues that are of concern to residents of the estate and local community and use these as a basis to influence decisions and service delivery.</p>
    <p>2.3  To help ensure that all from the local community and from socially and/or economically excluded groups have an opportunity to be involved in consultation that could be used to inform the development of services, policies or strategies</p>
    <p>2.4 To promote, inform and facilitate understanding of services, opportunities, and topical issues amongst residents of  the local community.</p>
    <p>2.5 Where necessary, the group will work together to identify and apply for funding to enable identified projects to be delivered.</p>
    <p>2.6 To be democratic, non-sectarian, not affiliated to or connected directly with any political party or political organisation, non-profit making,</p>
    <p>2.7  Using appropriate feedback methods keep the wider community  informed of the groups progress</p>
    <p>2.8 To undertake any such other activities as may fulfil these objectives</p>
    <p><strong>3 Responsibilities of  HLCA Management Committee members</strong></p>
    <p>3.1 The responsibilities are as follows:</p>
    <ul>
    <li>To attend meetings regularly</li>
    <li>To actively participate</li>
    <li>To actively and positively promote the work of the HLCA</li>
    </ul>
    <p>3.2  If a Member is unable to attend any meeting the member must send an apology.</p>
    <p>The member may send his/her views in writing on specific agenda items to the Chair.</p>
    <p>3.3   If a Member is unhappy with any of the working arrangements of the HLCA this should be raised with the Chair or Vice Chair before the next meeting, who will attempt to resolve issues on an informal basis where possible or discuss issues with the wider group to try and resolve.</p>
    <p><strong>4. Powers</strong></p>
    <p>In order to achieve its aims, HLCA may:</p>
    <ul>
    <li>Raise money</li>
    <li>Open bank accounts</li>
    <li>Take out insurance</li>
    <li>Obtain and pay for goods and services necessary to run the group</li>
    <li>Hire, rent or lease premises to run the group’s activities and manage its business</li>
    <li>Organise activities and events</li>
    <li>Work with similar groups and exchange information and advice with them</li>
    <li>Do anything that is lawful which will help it to fulfil its aims</li>
    </ul>
    <p><strong>5. Membership</strong></p>
    <p>Proposed representatives are attached as Appendix 1</p>
    <p>5.1 Membership of  HLCA is open to individuals over the age of 18  who are interested in furthering the work of and who have paid any annual subscription agreed by the management committee.</p>
    <p>5.2 The management committee may end the membership of any member for any good reason, by a majority vote at a committee meeting, as long as that person has the opportunity to make their case to the committee before they make their decision.</p>
    <p><strong>5.3  Conduct of Members at meetings:</strong></p>
    <p>Members must be courteous to each other at all times and allow each other to speak<br />
    Members should not bring the HLCA into disrepute<br />
    Members should not speak or write on behalf of the group without the prior agreement of the group.  Any correspondence sent on behalf of the group should be made available to all members of the group.<br />
    Members should observe collective responsibility for committee decisions</p>
    <p><strong>5.4 Breach of the Code of Conduct</strong></p>
    <p>If a member attending the meeting does not abide by the code of conduct the Chair will warn them that if they break the code again they may be asked to leave the meeting.</p>
    <p>The Chair may give the person concerned two further warnings (a maximum of three warnings in any one meeting and /or three consecutive meetings).</p>
    <p>If the person continues to ignore these Rules and refuses to leave the meeting after being warned by the Chair then the Chair has the power to close the meeting.</p>
    <p>Any decisions on expulsion from the group will be made collectively</p>
    <p>Members who fail to attend three consecutive meetings without sending apologies or good reason will automatically be removed as a member of the committee.</p>
    <p><strong>5.5 Co-option of additional members</strong></p>
    <p>Additional members can be co-opted onto the HLCA committee on majority agreement of members.</p>
    <p><strong>6. Conduct of Meetings</strong></p>
    <p>HLCA committee will work to an agenda, which will be distributed where possible at least  24 hours prior to the meeting.</p>
    <p>Items for future meetings will be a standing agenda item.</p>
    <p>Outstanding agenda items will be carried forward to the next meeting as required.</p>
    <p><strong>6. Sub-groups</strong></p>
    <p>6.1 Where sub-groups are formed to carry out pieces of work, the HLCA will be responsible for identifying the Chair of the sub-group, its members, the aims and objectives and the timescales for the work to be completed.</p>
    <p>6.2 Members of the sub-groups will be responsible for attending and contributing to the sub-group and will be collectively responsible for ensuring that the work is undertaken.</p>
    <p>6.3 The Chair of each sub-group will have ultimate responsibility for the progress of the sub-group.</p>
    <p>6.4 The sub-groups will be responsible for making recommendations to the HLCA  who will then make decisions based on these recommendations.</p>
    <p><strong>7. Decision Making Process</strong></p>
    <p>7.1 All representatives on the group will have one vote. Decisions will be based on a consensus vote.</p>
    <p>7.2 Members will declare vested interest in any issues being discussed and decisions made.</p>
    <p>7.3 Account will be taken of the financial, environmental and human resource implications of decisions.</p>
    <p>7.4 HLCA  will ensure that appropriate guidance and advice has been sought and that options have been fully discussed.</p>
    <p><strong>8. Management</strong></p>
    <p>8.1 HLCA will be administered by a Management Committee of not</p>
    <p>less than  5 members and not more than  12 elected at the Annual General Meeting.</p>
    <p>8.2 The Officers of the Management Committee shall be the Chairperson, the Vice Chair, the Secretary and the Treasurer.</p>
    <p>8.3 Decisions will be made by a majority of Committee Members present and voting. In the case of a tie, the Chairperson will have the casting vote.</p>
    <p>8.4  The Management Committee may appoint  co-opted members as and when necessary. All coopted committee members may serve until the next AGM when they may stand for election by the members.</p>
    <p>8.5  The Management Committee will meet at least 6  times a year.</p>
    <p>8.6  At least  4 or one third of members of the committee must be present for a Management Committee to take place, whichever is the greater.</p>
    <p>8.7 No member of the management committee, or anyone connected to them, shall receive any payment (other than reimbursement of out of pocket expenses).</p>
    <p><strong>9.  Finances</strong></p>
    <p>9.1 The funds of HLCA will be paid into an account in the name of The Holly Lodge Community Association operated by the Management Committee. All cheques and transactions must be signed by at least two members of the Management Committee and  amounts above the sum of £100 must be approved by the Management Committee.</p>
    <p>9.2 The funds belonging to shall be used only to further the aims of the HLCA.</p>
    <p><strong>10  Annual General Meeting (AGM)</strong></p>
    <p>10.1  There shall be an AGM to be held in October or as soon as possible after.</p>
    <p>10.2  Members will be given at least  21 days  notice.</p>
    <p>10.3 The Management Committee will present the report and accounts of the preceding year at the Annual General Meeting.</p>
    <p>10.4  Nominations for election to the Management Committee must be made at the meeting. Nominees can also be given to the Chair before the meeting in writing.</p>
    <p>10.5.  Special general meeting</p>
    <p>The Management Committee may call a Special Meeting at any time with  21 days notice given to all members.</p>
    <p><strong>11. Alterations to the constitution</strong></p>
    <p>Alterations to the Constitution of can only be made at a General Meeting</p>
    <p>after a proposal has been circulated to all members with notification (as in clause 10.2 above) of the proposed change, and the date, time and place of the meeting at which the proposed amendment will be discussed and voted on. Alterations to the constitution will require approval of two thirds of members present and voting at the meeting.</p>
    <p><strong>11. Winding up</strong></p>
    <p>The HLCA can be wound up at a Special General Meeting called for that purpose.</p>
    <p>The proposal to wind up must be advertised 14 days before the meeting.</p>
    <p>The decision to wind up will require the approval of two thirds of members present and voting at the meeting.</p>
    <p>Surplus funds of if it is dissolved, will be returned to the donor where</p>
    <p>possible. If this is not possible any funds left over will be donated to an organisation with similar aims following approval by two thirds of members present and voting at the meeting.</p>
    <p>Constitution adopted</p>
    <p>This constitution was adopted by the members of at a meeting held on Wednesday November 13th 2013</p>
    <p>Date 13/11/13</p>
    <p>Signed<br />
    Barbara Smith</p>
    <figure>
        <Img fixed={data.imageOne.childImageSharp.fixed} alt="B.I.Smith-signature" />
    </figure>
    <p>Position: Chair</p>
    <hr />
    <p><strong>Membership Agreement</strong></p>
    <p>As a member of the Holly Lodge Community Association Management Committee I agree to the following:</p>
    <ol>
    <li>To work with the rest of the group as a team and be positive and fair in my involvement.</li>
    <li>Respect the rights of other group members to have their own views and input without personal criticism, offensive language or behaviour.</li>
    <li>Treat any information, comments and input as confidential and not to divulge this information outside of the group.</li>
    <li>Not to bring my personal issues to the group unless they are pertinent to the issue under discussion.</li>
    <li>Adhere to the principles of equal opportunities in my comments and behaviour and ensure that no member suffers discrimination.</li>
    </ol>
    <p>Signed:<br />
    Dated:</p>
    <div className="page-btn center">
        <Button type="a" href="/Holly-Lodge-Community-Association-constitution.doc" className="green-btn">Download a copy</Button>
    </div>
  </LayoutPage>
)

export default ConstitutionPage

export const query = graphql`
query {
    imageOne: file(relativePath: {eq: "B.I.Smith-signature.jpg"}) {
        childImageSharp {
            fixed(width: 200) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`
