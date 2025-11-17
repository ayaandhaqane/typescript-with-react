import { useSettingsStorage } from '../hooks/useSettingsStorage'

export function SettingsStorageDemo() {
  const [settings, setSettings] = useSettingsStorage('app-settings', {
    language: 'en',
    notifications: true
  })

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>useSettingsStorage Demo</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
        <div>
          <label>
            Language:
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              style={{ marginLeft: '8px', padding: '4px' }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
              style={{ marginRight: '8px' }}
            />
            Notifications
          </label>
        </div>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
        Settings persist in localStorage. Refresh the page to see them persist!
      </p>
    </div>
  )
}

