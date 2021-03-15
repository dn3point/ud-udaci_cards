import AsyncStorage from '@react-native-community/async-storage'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

export const NOTIFICATION_KEY = 'NOTIFICATION'

export function clearNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Start a quiz!',
    body: "👋 don't forget to test yourself for today!",
  }
}

export function setNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  hour: 20,
                  minute: 0,
                  repeats: true
                },
              })

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
