import styled from 'styled-components';
import Layout from '../../components/UI/Layout';
import { ProjectPageWrapper } from '../../components/UI/ProjectPageWrapper';
import { BREAKPOINTS } from '../../styles/constants';

function Table({ partA, partB, fullKit }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Part</th>
					<th>SKU</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Part A</td>
					<td>{partA}</td>
				</tr>
				<tr>
					<td>Part B</td>
					<td>{partB}</td>
				</tr>
				<tr>
					<td>Full Kit</td>
					<td>{fullKit}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default function RamUtilities() {
	return (
		<Layout>
			<Wrapper>
				<h1>Reynolds Advanced Utilities</h1>
				<h2>Summary:</h2>
				<p>
					Full-stack app built with a React frontend connected to a Node.js backend and PostgreSQL
					database—containerized and deployed with Docker. When user scans product barcode, the request gets sent to the
					backend where it gets the product information from the database, calculates the product&apos;s age, and
					responds with the product information and expiration status. Allows for easy finding and tracking of expired
					and soon-to-be expired products. Creates PDFs and spreadsheets of information to send to headquarters for
					return process.
				</p>
				<h2>Problem:</h2>
				<p>
					<strong>Every few months I would spend a couple hours walking around the warehouse,</strong> checking the
					oldest lot number on every product, check my printout of the expiration limits, do some math, figure out the
					product’s age, do some more math, and finally determine whether it should be returned or not—for hundreds of
					products. <em>And that was only the first step!</em>
				</p>
				<Quote>
					<blockquote>
						<p>There&apos;s got to be a better way...</p>
					</blockquote>
					<figcaption>—the thought that started a thousand projects</figcaption>
				</Quote>
				<p>
					That’s where it started. Now I just spend a few minutes walking around the warehouse and scan the barcode on
					every product. When I scan a barcode the app will fetch the product information from the database and send it
					back, along with how old the product is and whether it’s expired or not. Then I can filter the list of
					products into not only a list of everything that’s already expired, but also a list of everything that will
					expire before the next time I have to do it—and print all the information out as a handy PDF.{' '}
					<strong>All in about ten minutes.</strong>
				</p>
				<p>
					And that’s just for finding which products to send back. Normally I’d have to gather those products onto a
					pallet and copy down all of the information just to enter it all into a spreadsheet. Now I just gather up all
					the products, scan them all in, and the spreadsheet gets made for me, ready to send in to headquarters.
				</p>
				<h2>Highlight:</h2>
				<p>
					There were so many challenging problems to figure out while building this. From determining if the product is
					expired, to generating PDFs and spreadsheets. But, by far, the most technically challenging was the combining
					of individual parts into a full kit.
				</p>
				<InfoCard>
					<h3>Some background:</h3>
					<p>
						All of the products we sell are composed of two parts—Part A and Part B. Most kits come with both parts in a
						single box, with one SKU for the entire kit—no problems there. But two 43 lbs. five-gallon buckets in a box
						together would be a pretty uncomfortable box to carry, so the five-gallon units come as two separate
						buckets—meaning for each five-gallon kit there are three SKUs—Part A, Part B, and the Full Kit.
					</p>
					<h3>Now, most products follow the pattern of:</h3>
					<Table partA="43170A" partB="43170B" fullKit="43171" />
					<p>
						Combining these into the full kit is simple enough. What makes it not so simple is that not everything
						follows that pattern. Some products share a common part. So we end up with something like:
					</p>
					<Table partA="43170A" partB="21470B" fullKit="21471" />
				</InfoCard>
				<p>
					I solved this by first taking all of the products and checking to see if the SKU ended in either “A” or “B” if
					so, they were marked as ‘combinable.’ Then, when you enter combine mode, you’ll get the option to select from
					the combinable products. If the two products you select have matching base SKUs, it’ll fetch the information
					for the combined product SKU and confirm it’s correct. If the two products have mis-matched SKUs, it will
					prompt you to enter in the combined product SKU before confirming.
				</p>
				Photos
				<p>
					Now, to add even more complication to the combination process, while most products are 1 Part A : 1 Part B,
					some are 2A:1B, or 1A:2B, so combining products into the full kit isn’t as simple as matching SKUs, or asking
					for the combined SKU. Without checks you could end up combining products off-ratio and lose parts. So I had to
					add in tests to check the ratios of parts being combined and give warnings if it would cause issues.
				</p>
				Photos
				<Code>TODO: This is an area I plan on improving by adding unit testing to try and catch more edge cases.</Code>
				<h2>Lessons Learned:</h2>
				<p>
					While the combination logic might have been the trickiest bit I had to overcome, this entire project was such
					an awesome learning experience the whole way through. What started as a simple Python script I had made to
					check the ages of products has turned into a full-fledged full-stack web app. Along the way I was able to
					learn and add features that were just one of those “wouldn’t that be neat?” ideas when I started.
				</p>
				<h2>What&apos;s Next?</h2>
				<p>
					I’m currently working on a re-write of this project. First step is I plan on re-writing it with NextJS. While
					I’m glad I did the front-end and back-end separately and was able to learn about deploying it all with Docker*
					(Docker has been awesome for quickly setting up databases while developing!), it’s added complexity that isn’t
					really needed for this project. I’m looking forward to having everything working together in one place with
					Next.
				</p>
				<p>
					I’m also doing the re-write in Typescript. There were more than a few points where I was passing information
					back and forth and getting lost between what was going where and expecting what. Typescript should help me
					solve some of those issues.
				</p>
				<p>
					There are also quite a few new features that will be added after getting feedback from users, as well as ones
					I’ve thought of myself. I’m most excited about adding in a feature to send an email every month with a list of
					products expiring that month. That should help make it even more unlikely that a customer will be sent expired
					product.
				</p>
				<p>
					<strong>Overall this project was a huge learning experience.</strong> And it’s very cool to have something I
					made being used by all of the other locations in the company.
				</p>
			</Wrapper>
		</Layout>
	);
}

const Code = styled.code`
	font-size: 1rem;
	background-color: hsl(0, 0%, 98%);
	padding: 0.5rem;
	width: 80%;
	align-self: center;
	margin: 1rem;
`;

const InfoCard = styled.div`
	width: 90%;
	align-self: center;
	background-color: hsl(0, 0%, 98%);
	padding: 1rem;
	margin: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem 0.5rem hsl(0, 0%, 90%);
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: ${BREAKPOINTS.lg}) {
		width: 100%;
	}

	table {
		min-width: 50%;
		margin: 1rem;
		align-self: center;
		border: 1px solid black;
		border-collapse: collapse;

		thead {
			tr {
				background-color: #ddd;
				border: 1px solid black;
				border-collapse: collapse;
			}
			th {
				padding: 0.5rem 2rem;
				text-align: center;
				border: 1px solid black;
				border-collapse: collapse;
			}
		}

		tbody {
			td {
				padding: 0.5rem 1rem;
				text-align: center;
				border: 1px solid black;
				border-collapse: collapse;
			}
		}
	}
`;

const Quote = styled.figure`
	margin: 2rem 0;
	width: 80%;
	align-self: center;
	display: flex;
	flex-direction: column;

	blockquote {
		margin: 0;

		p {
			font-size: 3rem;
			font-weight: 600;
		}

		p:before {
			content: open-quote;
		}

		p:after {
			content: close-quote;
		}

		@media (max-width: ${BREAKPOINTS.lg}) {
			font-size: 2rem;
		}

		@media (max-width: ${BREAKPOINTS.md}) {
			font-size: 1.5rem;
		}
	}

	figcaption {
		align-self: flex-end;
		font-size: 1.5rem;
		font-weight: 250;
		font-style: italic;

		@media (min-width: ${BREAKPOINTS.lg}) {
			margin-top: -1rem;
		}

		@media (max-width: ${BREAKPOINTS.lg}) {
			font-size: 1rem;
		}

		@media (max-width: ${BREAKPOINTS.md}) {
			font-size: 0.8rem;
			margin-left: 2rem;
		}
	}
`;

const Wrapper = styled.article`
	min-height: 100%;
	padding-top: 4rem;
	padding-bottom: 200px;
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	/* flex: 1 1 100%; */

	font-size: 1.25rem;

	h1 {
		text-align: center;
		font-size: 3.5rem;
		margin-bottom: 2rem;

		@media (max-width: ${BREAKPOINTS.md}) {
			font-size: 2.5rem;
		}

		@media (max-width: ${BREAKPOINTS.sm}) {
			/* font-size: 1.75rem; */
		}
	}

	h2 {
		font-size: 2.5rem;
		margin-left: -5rem;

		transform: translateY(-1rem) rotate(-3deg);

		@media (max-width: ${BREAKPOINTS.md}) {
			margin-left: -1.5rem;
			/* margin-bottom: 0.5rem; */
			transform: translateY(-0.25rem) rotate(-3deg);
			font-size: 1.5rem;
		}
	}

	p {
		padding: 1rem 0;
	}
`;
