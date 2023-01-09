import { IntermediatePerk, PerkTypes } from '@icemourne/description-converter'
import styles from './BasicItemInfo.module.scss'
import { useAppSelector } from 'src/redux/hooks'

export function InfoDisplayOptions({selectedType, selectedPerk}: {selectedType: PerkTypes, selectedPerk: IntermediatePerk}) {
   switch (selectedType) {
      case 'Armor Perk Exotic':
      case 'Weapon Frame Exotic':
      case 'Weapon Catalyst Exotic':
      case 'Weapon Perk Exotic':
         return (
            <>
               <label>Item name</label>
               <span>{selectedPerk.itemName || ''}</span>
               <label>Item hash</label>
               <span>{selectedPerk.itemHash || ''}</span>
               <label>Name</label>
               <span>{selectedPerk.name}</span>
               <label>Hash</label>
               <span>{selectedPerk.hash}</span>
            </>
         )
      default:
         return (
            <>
               <label>Name</label>
               <span>{selectedPerk.name}</span>
               <label>Hash</label>
               <span>{selectedPerk.hash}</span>
            </>
         )
   }
}

export function BasicInfo() {
   const globalState = useAppSelector((state) => state.global)
   const database = globalState.database
   const settings = globalState.settings

   const currentlySelected = settings.currentlySelected
   const selectedPerk = database[currentlySelected]

   return (
      <div className={styles.info_display}>
         <InfoDisplayOptions selectedType={settings.selectedType}  selectedPerk={selectedPerk} />
      </div>
   )
}
