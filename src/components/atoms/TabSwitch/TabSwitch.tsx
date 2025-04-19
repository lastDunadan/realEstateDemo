import { TabSwitchBody, TabSwitchButton } from './TabSwitch.styled';
import type { TabSwitch as TabSwitchType } from './TabSwitch.types';

export const TabSwitch: TabSwitchType = ({ value, onChange }) => (
  <TabSwitchBody>
    <TabSwitchButton
      isActive={value === 'houses'}
      onClick={() => onChange('houses')}
    >
      Houses
    </TabSwitchButton>
    <TabSwitchButton
      isActive={value === 'apartments'}
      onClick={() => onChange('apartments')}
    >
      Apartments
    </TabSwitchButton>
  </TabSwitchBody>
);
