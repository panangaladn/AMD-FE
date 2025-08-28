import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
          <Image
              source={require("../../assets/images/help_large.png")}  // your image
              style={styles.headerImage}
              resizeMode="contain"
          />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Help and Support</ThemedText>
      </ThemedView>
      <ThemedText>You can easily store your friends phone numbers and addresses here..</ThemedText>

      <Collapsible title="Why Save Contact">
        <ThemedText>
            Saving contacts is vital for both personal and professional efficiency.
            It instantly provides access to crucial numbers and emails,
            eliminating the frustration of searching through old messages or emails.
            This simple act saves significant time, streamlines communication,
            and ensures you never miss an important connection. It safeguards your network against
            lost phones or changed numbers, preserving valuable relationships. Ultimately,
            a well-maintained contact list is more than a digital address book;
            it’s an organized hub for your most important connections, keeping you prepared and in touch
            at all times.
        </ThemedText>
      </Collapsible>

        <Collapsible title="How to Save Contact">
            <ThemedText>
                To save a contact using this form, first fill in all the fields with the correct information. Enter the contacts
                full name, their complete physical address, a current phone number, and a valid email address.
                Double-check each entry for accuracy to ensure your saved details are correct. Once you are
                certain all the information is right, click the blue SAVE button at the bottom of the form.
                This action will store the contacts details in your address book,
                making it easy to find and use their information whenever you need it in the future.
                onnections, keeping you prepared and in touch
                at all times .
            </ThemedText>
        </Collapsible>
        <Collapsible title="How to View Contact">
            <ThemedText>
                To view your saved contacts, first locate and launch the My Contact application on your device.
                From the main screen, find and select the menu option labeled “View Contacts”.
                Tapping this will open a new screen displaying a complete, alphabetical list of all your
                saved contacts. You can simply scroll through this list to browse. To see the full details
                for a specific person—including their name, address, phone number, and email—tap on their name.
                This action will open their dedicated contact card, giving you a comprehensive view of all
                their stored information
            </ThemedText>
        </Collapsible>
        <Collapsible title="How to Edit Contact">
            <ThemedText>
                To update this contacts information, simply edit the details directly in the form fields.
                Change the name, address, phone number, or email address as needed. After making all the necessary
                corrections, review the information to ensure it is accurate. Finally, click the blue “UPDATE” button
                at the bottom of the form to confirm and save all your changes. This action will overwrite the
                old information in your contact list with the new details you have just entered
            </ThemedText>
        </Collapsible>
        <Collapsible title="How to Delete Contact">
            <ThemedText>
                To permanently remove this contact from your address book, locate the red “DELETE” button at the
                bottom of the form. Before clicking, ensure you have selected the correct contact,
                as this action is typically irreversible. Clicking the “DELETE” button will usually
                prompt a final confirmation message to prevent accidental loss. Confirm the deletion,
                and the system will then permanently erase all of this contact’s information (name, address, phone, and email) from your records. The contact  will be completely removed and cannot be retrieved.
            </ThemedText>
        </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    headerImage: {
        width: 200,
        height: 300,
        alignSelf: "center",
        // marginBottom: 50,
    },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
