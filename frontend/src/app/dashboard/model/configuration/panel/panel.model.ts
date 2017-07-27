import { ComponentItem } from '../../component-item/component-item.model';
import { PanelType } from './panel-type.enum';
import { PanelConfiguration } from './panel-configuration.model';

export class Panel {

  constructor(
    public type: PanelType,
    public configuration: PanelConfiguration
  ) {}

}
