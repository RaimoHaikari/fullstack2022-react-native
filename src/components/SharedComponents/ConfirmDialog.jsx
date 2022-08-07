import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';


const ConfirmDialog = ({closeHandler, isVisible}) => {

  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible])

  const hideDialog = (val) => {

    closeHandler(val);
    setVisible(false);

  };

  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Do you really want to delete review?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => hideDialog(true)}>YES</Button>
              <Button onPress={() => hideDialog(false)}>NO</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default ConfirmDialog;