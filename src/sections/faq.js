/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import Accordion from "components/accordion/accordion";

const faqs = [
  {
    title: "Are your wigs made of 100% human hair?",
    contents: (
      <div>
        YES. All of our lace wigs are made of 100% human hair and you can treat
        it as your own hair.
      </div>
    ),
  },
  {
    title: "What are the differences among your four types of hair?",
    contents: (
      <div>
        Brazilian virgin hair and Malaysian virgin hair are of grade A
        quality,the best. Chinese virgin hair is of grade B quality,the better.
        Indian remy hair is of grade C quality, the normal. which is the most
        common hair on the market. The texture of virgin hair is thicker,so
        virgin hair can last a longer time.Also virgin hair shows better
        performance in hair coloring.
      </div>
    ),
  },
  {
    title: "Whats are Lace Front Wig and Full Lace Wig?",
    contents: (
      <div>
        Lace Front Wig: "Lace Front Wig" or Front Lace Wig only has lace in the
        front of the wig and the remainder of the wig is made from a regular
        netted wig cap or other materials such as thin-skin. You are not able to
        wear a front lace wig in high up dos or ponytails.Full Lace Wig: "Full
        Lace Wigs" are lace wigs which are designed with the entire wig cap
        being made from lace as well as lace all around the perimeter of the
        wig. Full lace wigs allow you to wear your hair in high up dos and
        ponytails. Upon applying & adhering the lace wig, a flawless, natural
        and undetectable hairline is created.
      </div>
    ),
  },
  {
    title: "What are Bleached Knots?",
    contents: (
      <div>
        When a dark hair is tied to the base of a lace wig with a knot, you can
        see a dark dot on the skin, especially when the base is lace. Lace
        cannot hide the knot in the same way a monofilament base does. Bleached
        knots usually are only done at the front of the lace wig and it helps
        create the illusion that your hair is growing out of your head.
      </div>
    ),
  },
  {
    title: "What does Density refer to?",
    contents: (
      <div>
        The density refers to how thick the hair is and what density you order
        is really based on personal choice. Most women achieve a natural
        appearance with light to medium or medium density; however, your choice
        will depend on your styling preferences and individual profile.
      </div>
    ),
  },
  {
    title: "        How long can I expect the wig to last? ",
    contents: (
      <div>
        The life of your wig will depend on your use and care of it. If handled
        properly, it should last you about 6 months before needing hair added or
        a repair. If used as your main form of hair replacement and you are
        using daily, it is realistic to expect it to last 3-6 months before
        needing a repair or hair added.
      </div>
    ),
  },
  {
    title: "If I place an order today, when will I receive it?",
    contents: (
      <div>
        If your order is in stock, normally we need 1-3 business days to process
        your order and it will take another 2-3 business days to reach you by
        DHL , FedEx and UPS .
      </div>
    ),
  },
  {
    title: "Will the hairline of the lace wig have a natural look?",
    contents: (
      <div>
        Yes, when you wear the lace wigs correctly according to our user guide,
        the hairline will have a natural look, just similar as your own hair
        growing from your scalp. For customized orders, we recommend you to have
        baby hairs around the front and perimeter of the wig and make the
        hairline with more natural looking
      </div>
    ),
  },
  {
    title:
      "Do you charge extra for Baby Hair? Does the wig come with Baby Hair?",
    contents: (
      <div>
        Our inventory wigs all have baby hair around the perimeter. It is free
        of charge. Also, you can select to add baby hair around front only, back
        only, all around the perimeter or no baby hair of custom wigs. Most
        people choose to add baby hair all around the perimeter which makes the
        lace wig have a more natural looking.
      </div>
    ),
  },
  {
    title: "Does the straight hair wave up when being wet?",
    contents: (
      <div>
        If it is silky straight, our answer is "Yes, it does". But after it is
        dry, the silky straight style will be back. The Yaki Perm Straight and
        Light Yaki textures do not wave up when wet.
      </div>
    ),
  },
  {
    title:
      "        What is Yaki hair and what is the difference between Yaki hair and Silky hair?    ",
    contents: (
      <div>
        Yaki hair is a hair texture which is processed from silky hair to
        resemble the chemically relaxed hair. So Yaki hair looks and feels like
        African American hair.If you are looking for natural hair wigs to boost
        your natural hairstyle,yaki most likely fits the bill. Silky hair is the
        unprocessed hair with no texture which looks and feels smooth and shiny.
      </div>
    ),
  },
  {
    title: " What is the difference between Swiss lace & French lace?",
    contents: (
      <div>
        Swiss lace is finer and softer than French lace. Swiss lace is with
        better and natural looking to match the skin. French lace is a bit
        thicker and more durable for use. Both two types of laces can be dyed to
        match different skins.
      </div>
    ),
  },
  {
    title: " Do I have to wear a wig cap with the wig?",
    contents: (
      <div>
        No, you do not need to use any wig caps under the wig. You can easily
        part your own hair at the same point as your wig before wearing the
        unit, which will strengthen your parting on the wig while use.
      </div>
    ),
  },
  {
    title: "Is the wig available for being parted as I wish?",
    contents: (
      <div>
        Yes, all our lace wigs can be parted anywhere, this is free styled. Our
        Lace wigs are all freestyle.
      </div>
    ),
  },
  {
    title:
      "What is the difference between Full Lace Cap with Stretch and Full Lace Cap without Stretch?",
    contents: (
      <div>
        These two caps are with lace all around the perimeter and available for
        you to wear your hair in updos and high ponytails. When the caps are
        glued down, the wig will have a natural hairline all around the
        perimeter. The unit can be parted anywhere as you wish. Full lace cap
        with stretch will be helpful for adjustment on your head size. Full lace
        cap with ear to ear stretch can be adjusted in Circumference. Full lace
        cap with stretch in crown can be adjusted in the crown. Full lace cap
        without stretch does not have stretch and can be worn by women without
        hair or with scarce hair.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        {/* <SectionHeader
          title="Do you have any quesiton"
          description="Our support team ready to help you, please contact with them"
        /> */}
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
