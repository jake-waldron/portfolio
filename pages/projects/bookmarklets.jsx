import styled from 'styled-components';
import Layout from '../../components/UI/Layout';
import { ProjectPageWrapper } from '../../components/UI/ProjectPageWrapper';

export default function Bookmarklets() {
	return (
		<Layout>
			<ProjectPageWrapper>
				<h1>Add to Truck Bookmarklets</h1>
				<h2>Summary:</h2>
				<p>
					A set of JavaScript bookmarklets that allow users to simply click on a product name to add it to a list of
					items for weekly stocking orders. After clicking on the product name it sends the information to an AWS Lambda
					function that connects to a shared Notion database using the Notion API, and returns status of the item on
					list.
				</p>
				<p>Currently used daily by the team at my location.</p>
				<h2>Problem:</h2>
				<p>
					I keep a list of products to add to our stocking order every week. This is what that list used to look like.
					(PHOTO)
				</p>
				<p>
					Now the problem with that is the rest of the team cannot see what is on the list on my desk. So we needed a
					way for everyone to be able to see and add to the list.
				</p>
				<p>
					Initially the idea was simply just a shared Notion database that we all had access to, but there were a few
					problems with that. We would have to:
				</p>
				<ol>
					<li>Open up a separate tab and type in the information</li>
					<li>First check to see what was on the list or duplicate information</li>
					<li>
						Make sure to remember to add something to the list because it was too much friction to do while taking an
						order on the phone/in person.
					</li>
				</ol>
				<p>
					In the past I had built another simple bookmarklet tool that would grab the current fuel surcharge from our
					freight company and, referencing our rates, give me the freight quote for that order’s address-so I knew how
					useful a simple bookmarklet could be. I also knew that Notion had an API for interacting with their databases.
					It was a perfect fit.
				</p>
				<h2>Highlight:</h2>
				<p>
					My favorite part of this project was the idea of using tools that were right for the job. It would have been
					very easy to convince myself I needed to build some kind of tool, complete with a custom dashboard, backend,
					database, and everything else-but that was overkill for this problem.
				</p>
				<p>
					Using a simple Javascript bookmarklet and the Notion API made it really easy to build a small tool that did
					only what we needed it to do. We had already been using Notion for keeping track of long-term tasks and other
					information in a central place, so this integrated into our existing system without any trouble. It also gave
					me the opportunity to explore using serverless AWS Lambda functions to trigger adding products to the list.
				</p>
				<p>
					The bookmarklet would capture the text content of the element being clicked and send that to the Lambda
					function, which would connect to the database and check to see whether that item was on the list, and either
					add it or return a message saying it was already on the list.
				</p>
				<p>
					Now when there’s a product we need to add to the stocking list, we simply click on the bookmarklet, click on
					the product name, and we’re done. Barely takes any movement. Definitely beats typing something in or writing
					it down on a piece of paper.
				</p>
				<p>
					I even built a separate bookmarklet for myself that would grab the items from the stocking order and remove
					them from the list on Notion.
				</p>
				<h2>Lessons Learned:</h2>
				<p>
					This really ended up being an exercise in simplicity. Trying to build a solution without overcomplicating it.
					It was also a fun challenge to create something using only JavaScript that would run quickly as a bookmarklet
					function that worked, looked good, and provided the feedback whether it was added to the list or not.
				</p>
			</ProjectPageWrapper>
		</Layout>
	);
}
