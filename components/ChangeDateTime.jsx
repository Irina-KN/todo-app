import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import { TimePickerModal } from "react-native-paper-dates";

import { DatePickerModal } from "react-native-paper-dates";

export const ChangeTime = ({ onChangeTime }) => {
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      let time = hours + ":" + minutes;
      onChangeTime(time);
    },
    [setVisible]
  );

  return (
    <View style={styles.ButtonDteTime}>
      <Pressable
        onPress={() => setVisible(true)}
        uppercase={false}
        mode="outlined"
        style={{
          height: 56,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
          Pick Time
        </Text>
      </Pressable>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12}
        minutes={14}
      />
    </View>
  );
};

export const ChangeDate = ({ onChangeDate }) => {
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const transformationDate = (componentDate) => {
    return String(componentDate).length < 2
      ? `0${componentDate}`
      : componentDate;
  };
  const getNewDate = (date) => {
    let day = transformationDate(date.getDate());
    let month = transformationDate(date.getMonth() + 1);
    let newDate = day + "." + month + "." + date.getFullYear();
    onChangeDate(newDate);
  };

  return (
    <View style={styles.ButtonDteTime}>
      <Pressable
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined"
        style={{
          height: 56,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
          Pick date
        </Text>
      </Pressable>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={() => setOpen(false)}
        date={date}
        onConfirm={({ date }) => {
          setOpen(false);
          setDate(date);
          if (date) {
            getNewDate(date);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonDteTime: {
    borderRadius: 10,
    backgroundColor: "#4A3780",
  },
});
