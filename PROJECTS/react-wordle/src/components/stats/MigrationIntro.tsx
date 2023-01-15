import { LogoutIcon } from '@heroicons/react/outline'

import {
  MIGRATE_BUTTON_TEXT,
  MIGRATE_DESCRIPTION_TEXT,
} from '../../constants/strings'

type Props = {
  handleMigrateStatsButton: () => void
}

export const MigrationIntro = ({ handleMigrateStatsButton }: Props) => {
  return (
    <div className="mt-5 columns-2 items-center items-stretch justify-center text-center dark:text-white sm:mt-6">
      <div className="mt-3 text-xs">{MIGRATE_DESCRIPTION_TEXT}</div>
      <button
        type="button"
        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
        onClick={handleMigrateStatsButton}
      >
        <LogoutIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" />
        {MIGRATE_BUTTON_TEXT}
      </button>
    </div>
  )
}
