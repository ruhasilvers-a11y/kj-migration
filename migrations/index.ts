import * as migration_20260820_initial_schema from './20260820_initial_schema';
import * as migration_20260822_add_category_image from './20260822_add_category_image';
import * as migration_20260822_add_rate_columns from './20260822_add_rate_columns';
import * as migration_20260823_192410_issues_2_3_4_permanent from './20260823_192410_issues_2_3_4_permanent';
import * as migration_20260824_073731_add_schemes_and_banners from './20260824_073731_add_schemes_and_banners';
import * as migration_20260824_add_misc_enum from './20260824_add_misc_enum';
import * as migration_20260824_fix_password_resets from './20260824_fix_password_resets';

export const migrations = [
  {
    up: migration_20260820_initial_schema.up,
    down: migration_20260820_initial_schema.down,
    name: '20260820_initial_schema',
  },
  {
    up: migration_20260822_add_category_image.up,
    down: migration_20260822_add_category_image.down,
    name: '20260822_add_category_image',
  },
  {
    up: migration_20260822_add_rate_columns.up,
    down: migration_20260822_add_rate_columns.down,
    name: '20260822_add_rate_columns',
  },
  {
    up: migration_20260823_192410_issues_2_3_4_permanent.up,
    down: migration_20260823_192410_issues_2_3_4_permanent.down,
    name: '20260823_192410_issues_2_3_4_permanent',
  },
  {
    up: migration_20260824_073731_add_schemes_and_banners.up,
    down: migration_20260824_073731_add_schemes_and_banners.down,
    name: '20260824_073731_add_schemes_and_banners',
  },
  {
    up: migration_20260824_add_misc_enum.up,
    down: migration_20260824_add_misc_enum.down,
    name: '20260824_add_misc_enum',
  },
  {
    up: migration_20260824_fix_password_resets.up,
    down: migration_20260824_fix_password_resets.down,
    name: '20260824_fix_password_resets',
  },
];
