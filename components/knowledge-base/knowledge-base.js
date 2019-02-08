import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  Button,
  Divider,
  Card,
  Subheading,
  Title,
  Paragraph,
  Headline,
  Text,
} from 'react-native-paper';
import { colors } from '../../common_styles';

export const KnowledgeBase = () => {
  return (
    <ScrollView style={styles.container}>
      <Headline style={styles.headline}>
        Frequently Asked Questions About My Supplies
      </Headline>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Why does my mask leak air ?</Title>
          <Paragraph>
            You should first try to tighten the bottom straps on the headgear.
            If this does not fix your problem then you will need to order a new
            seal / pillow replacement. The seal is worn out.The amount of time
            you wear it, the natural oils on your face, and regular washing will
            wear out the seal on the mask over time.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Why am I getting a redness from my mask ?</Title>
          <Paragraph>
            You could be wearing your mask too tight, not cleaning it well
            enough, or it may be wearing out.Try to clean your mask first.If
            your mask is still leaving a rash / redness then you will need to
            replace your seal.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>How can I change to a different mask ?</Title>
          <Paragraph>
            {' '}
            You will need to talk with your Sleep Coach to verify that you can
            change to another mask. If you are eligible, then you would need to
            be set up for a fitting and get your new mask.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Why is there water in my tubing ?</Title>
          <Paragraph>
            You may have to insulate the tubing during the winter months to
            prevent condensation. An insulation cover can be ordered from your
            sleep coach.
          </Paragraph>
        </Card.Content>
      </Card>
      <Headline style={styles.headline}>Cleaning My Supplies</Headline>
      <Card style={styles.card}>
        <Card.Content>
          <Title>How do I clean my supplies ?</Title>
          <Paragraph>
            Daily : Wash the mask system with warm, soapy water.Please make sure
            that you use unscented soap. We recommend plain Ivory liquid soap or
            baby shampoo.Rinse well and allow to air dry out of direct sunlight.
            Weekly: Separate and hand wash the mask components and headgear in
            warm, soapy water.Do not use soaps with added scents.Rinse the
            components well and allow them to air dry out of direct sunlight.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>What precautions should I take ?</Title>
          <Paragraph>
            Do not use solutions containing vinegar, bleach, chlorine, alcohol,
            aromatics, moisturizers, antibacterial agents or scents to clean any
            part of the system or air tubing. These solutions may cause damage
            and reduce the life of the product.Do not expose any part of the
            system or tubing to direct sunlight as it may deteriorate the
            product.If any visible deterioration of a component is
            apparent(cracking, tears, etc.) the component should be discarded
            and replaced. Note: The headgear may be washed without being taken
            apart.
          </Paragraph>
        </Card.Content>
      </Card>
      <Headline style={styles.headline}>Reordering Supplies</Headline>
      <Card style={styles.card}>
        <Card.Content>
          <Title>How often do I need to order supplies ?</Title>
          <Paragraph>
            It is important to replace your PAP supplies every 3 - 6 months.
            Masks, tubing, and filters wear out over time and your equipment may
            not be as effective as possible. This also aids in keeping
            infections down to a minimum. We offer several methods of contact to
            remind you of your replacement supplies: Automated Call, Email
            Notification, Post Card, and Text Message. If you have not been
            receiving notifications please make sure that your sleep coach has
            your correct information and that you have chosen a form of contact.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  card: {
    marginVertical: 5,
  },
  headline: {
    textAlign: 'center',
    backgroundColor: colors.lighterGrey,
    paddingVertical: 3,
  },
});
