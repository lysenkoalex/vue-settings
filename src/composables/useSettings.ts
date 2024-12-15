import { ref, watch } from 'vue';

interface IGeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

interface ISettingsMap {
  general: IGeneralSettings;
  notifications: INotificationsSettings;
  privacy: IPrivacySettings;
}

type SettingsKey = keyof ISettingsMap;

const init = <T extends SettingsKey>(key: T, defaults: ISettingsMap[T]) => {
  const stored = localStorage.getItem(key);

  return stored !== null ? JSON.parse(stored) : defaults;
};

const watcher =
  <T extends SettingsKey>(key: string) =>
  (value: ISettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

const general = ref<IGeneralSettings>(
  init('general', {
    about: '',
    country: 'USA',
    gender: 'male',
    email: '',
    username: ''
  })
);

watch(general, watcher('general'), { deep: true });

interface INotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<INotificationsSettings>(
  init('notifications', {
    email: false,
    sms: false
  })
);

watch(notifications, watcher('notifications'), { deep: true });

interface IPrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

type Visibility = 'public' | 'private';

const privacy = ref<IPrivacySettings>(
  init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false
  })
);

watch(privacy, watcher('privacy'), { deep: true });

export function useSettings() {
  return {
    general,
    notifications,
    privacy
  };
}
