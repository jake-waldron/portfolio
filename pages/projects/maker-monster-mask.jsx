import styled from 'styled-components';
import Layout from '../../components/UI/Layout';
import { ProjectPageWrapper } from '../../components/UI/ProjectPageWrapper';

export default function Mask() {
	return (
		<Layout>
			<ProjectPageWrapper>
				<h1>The Maker Monster Mask</h1>
				<h2>Summary:</h2>
				<p>
					Custom animatronic mask with Bluetooth controller for triggering blinks and switching animation modes. Built
					with Arduino. Designed parts in Fusion 360 and fabricated using 3D printing, fiberglass, and other materials.
				</p>
				<h2>Problem:</h2>
				<p>
					I run a youtube channel called The Maker Monster. It’s me in a mask. Now this is the second mask. The first
					mask was a bit… creepy. The old mask was made using silicone and, while it looked really cool, I understood
					why some people were put off by it. I also suspect that because it was so unfamiliar looking it took people a
					fraction of a second longer to recognize what they were seeing, which was enough to lose interest.
				</p>
				<p>
					The plan was always for a second version of the mask that blinked. So, being interested in puppets I decided I
					would go for a more classic puppet look for the new mask as well. The combination of recognizable style and
					blinking would add a whole lot more life and approachability to the mask.
				</p>
				<h2>Highlight:</h2>
				<p>
					Using Fusion 360 to model and design the parts was amazing. I was able to mock up ideas, 3D print the parts,
					and then wire it up and test the functionality, all within a day. This let me prototype the design of the eyes
					so much quicker than if I were doing it all by hand.
				</p>
				<p>
					It also made it very easy to design a modular system. I wanted the final mask to be able to completely
					disassemble and replace parts if needed. So being able to design single parts at a time made it really easy to
					ensure that everything was replaceable.
				</p>
				<p>
					The original idea started as just having blinking eyes and a wired button to be able to trigger them myself.
					But like every other project, eventually I had that thought of “Wouldn’t it be cool if…”
				</p>
				<p>
					Before I knew it I was learning about Bluetooth connections and tft display screens and, well, it is certainly
					a lot cooler. I ended up building a wireless Bluetooth controller that would let me cycle between different
					animation modes and trigger the blinks.
				</p>
				<p>
					I also built in wireless charging to the mask so, at the end of the day, I could put it down on my life-cast
					head form and it would be fully charged the next time I picked it up.
				</p>
				<h2>Lessons Learned:</h2>
				<p>
					I think this project reinforced something that all of my projects have shown me. There’s something almost
					magical about having an idea you don’t even know is possible or not, and putting in the work to learn the
					things you need to learn to bring it to life.
				</p>
			</ProjectPageWrapper>
		</Layout>
	);
}
