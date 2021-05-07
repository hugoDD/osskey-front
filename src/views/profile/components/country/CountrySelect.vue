<template>
  <el-select v-model="countryValue">
    <el-option :value="`AFG`"  :label="`Afghanistan`" />
    <el-option :value="`ALA`"  :label="`Åland Islands`"/>
    <el-option :value="`ALB`"  :label="`Albania`"/>
    <el-option :value="`DZA`"  :label="`Algeria`"/>
    <el-option :value="`ASM`"  :label="`American Samoa`"/>
    <el-option :value="`AND`"  :label="`Andorra`"/>
    <el-option :value="`AGO`"  :label="`Angola`"/>
    <el-option :value="`AIA`"  :label="`Anguilla`"/>
    <el-option :value="`ATA`"  :label="`Antarctica`"/>
    <el-option :value="`ATG`"  :label="`Antigua and Barbuda`"/>
    <el-option :value="`ARG`"  :label="`Argentina`"/>
    <el-option :value="`ARM`"  :label="`Armenia`"/>
    <el-option :value="`ABW`"  :label="`Aruba`"/>
    <el-option :value="`AUS`"  :label="`Australia`"/>
    <el-option :value="`AUT`"  :label="`Austria`"/>
    <el-option :value="`AZE`"  :label="`Azerbaijan`"/>
    <el-option :value="`BHS`"  :label="`Bahamas`"/>
    <el-option :value="`BHR`"  :label="`Bahrain`"/>
    <el-option :value="`BGD`"  :label="`Bangladesh`"/>
    <el-option :value="`BRB`"  :label="`Barbados`"/>
    <el-option :value="`BLR`"  :label="`Belarus`"/>
    <el-option :value="`BEL`"  :label="`Belgium`"/>
    <el-option :value="`BLZ`"  :label="`Belize`"/>
    <el-option :value="`BEN`"  :label="`Benin`"/>
    <el-option :value="`BMU`"  :label="`Bermuda`"/>
    <el-option :value="`BTN`"  :label="`Bhutan`"/>
    <el-option :value="`BOL`"  :label="`Bolivia, Plurinational State of`"/>
    <el-option :value="`BES`"  :label="`Bonaire, Sint Eustatius and Saba`"/>
    <el-option :value="`BIH`"  :label="`Bosnia and Herzegovina`"/>
    <el-option :value="`BWA`"  :label="`Botswana`"/>
    <el-option :value="`BVT`"  :label="`Bouvet Island`"/>
    <el-option :value="`BRA`"  :label="`Brazil`"/>
    <el-option :value="`IOT`"  :label="`British Indian Ocean Territory`"/>
    <el-option :value="`BRN`"  :label="`Brunei Darussalam`"/>
    <el-option :value="`BGR`"  :label="`Bulgaria`"/>
    <el-option :value="`BFA`"  :label="`Burkina Faso`"/>
    <el-option :value="`BDI`"  :label="`Burundi`"/>
    <el-option :value="`KHM`"  :label="`Cambodia`"/>
    <el-option :value="`CMR`"  :label="`Cameroon`"/>
    <el-option :value="`CAN`"  :label="`Canada`"/>
    <el-option :value="`CPV`"  :label="`Cape Verde`"/>
    <el-option :value="`CYM`"  :label="`Cayman Islands`"/>
    <el-option :value="`CAF`"  :label="`Central African Republic`"/>
    <el-option :value="`TCD`"  :label="`Chad`"/>
    <el-option :value="`CHL`"  :label="`Chile`"/>
    <el-option :value="`CHN`"  :label="`China`"/>
    <el-option :value="`CXR`"  :label="`Christmas Island`"/>
    <el-option :value="`CCK`"  :label="`Cocos (Keeling) Islands`"/>
    <el-option :value="`COL`"  :label="`Colombia`"/>
    <el-option :value="`COM`"  :label="`Comoros`"/>
    <el-option :value="`COG`"  :label="`Congo`"/>
    <el-option :value="`COD`"  :label="`Congo, the Democratic Republic of the`"/>
    <el-option :value="`COK`"  :label="`Cook Islands`"/>
    <el-option :value="`CRI`"  :label="`Costa Rica`"/>
    <el-option :value="`CIV`"  :label="`Côte d'Ivoire`"/>
    <el-option :value="`HRV`"  :label="`Croatia`"/>
    <el-option :value="`CUB`"  :label="`Cuba`"/>
    <el-option :value="`CUW`"  :label="`Curaçao`"/>
    <el-option :value="`CYP`"  :label="`Cyprus`"/>
    <el-option :value="`CZE`"  :label="`Czech Republic`"/>
    <el-option :value="`DNK`"  :label="`Denmark`"/>
    <el-option :value="`DJI`"  :label="`Djibouti`"/>
    <el-option :value="`DMA`"  :label="`Dominica`"/>
    <el-option :value="`DOM`"  :label="`Dominican Republic`"/>
    <el-option :value="`ECU`"  :label="`Ecuador`"/>
    <el-option :value="`EGY`"  :label="`Egypt`"/>
    <el-option :value="`SLV`"  :label="`El Salvador`"/>
    <el-option :value="`GNQ`"  :label="`Equatorial Guinea`"/>
    <el-option :value="`ERI`"  :label="`Eritrea`"/>
    <el-option :value="`EST`"  :label="`Estonia`"/>
    <el-option :value="`ETH`"  :label="`Ethiopia`"/>
    <el-option :value="`FLK`"  :label="`Falkland Islands (Malvinas)`"/>
    <el-option :value="`FRO`"  :label="`Faroe Islands`"/>
    <el-option :value="`FJI`"  :label="`Fiji`"/>
    <el-option :value="`FIN`"  :label="`Finland`"/>
    <el-option :value="`FRA`"  :label="`France`"/>
    <el-option :value="`GUF`"  :label="`French Guiana`"/>
    <el-option :value="`PYF`"  :label="`French Polynesia`"/>
    <el-option :value="`ATF`"  :label="`French Southern Territories`"/>
    <el-option :value="`GAB`"  :label="`Gabon`"/>
    <el-option :value="`GMB`"  :label="`Gambia`"/>
    <el-option :value="`GEO`"  :label="`Georgia`"/>
    <el-option :value="`DEU`"  :label="`Germany`"/>
    <el-option :value="`GHA`"  :label="`Ghana`"/>
    <el-option :value="`GIB`"  :label="`Gibraltar`"/>
    <el-option :value="`GRC`"  :label="`Greece`"/>
    <el-option :value="`GRL`"  :label="`Greenland`"/>
    <el-option :value="`GRD`"  :label="`Grenada`"/>
    <el-option :value="`GLP`"  :label="`Guadeloupe`"/>
    <el-option :value="`GUM`"  :label="`Guam`"/>
    <el-option :value="`GTM`"  :label="`Guatemala`"/>
    <el-option :value="`GGY`"  :label="`Guernsey`"/>
    <el-option :value="`GIN`"  :label="`Guinea`"/>
    <el-option :value="`GNB`"  :label="`Guinea-Bissau`"/>
    <el-option :value="`GUY`"  :label="`Guyana`"/>
    <el-option :value="`HTI`"  :label="`Haiti`"/>
    <el-option :value="`HMD`"  :label="`Heard Island and McDonald Islands`"/>
    <el-option :value="`VAT`"  :label="`Holy See (Vatican City State)`"/>
    <el-option :value="`HND`"  :label="`Honduras`"/>
    <el-option :value="`HKG`"  :label="`Hong Kong`"/>
    <el-option :value="`HUN`"  :label="`Hungary`"/>
    <el-option :value="`ISL`"  :label="`Iceland`"/>
    <el-option :value="`IND`"  :label="`India`"/>
    <el-option :value="`IDN`"  :label="`Indonesia`"/>
    <el-option :value="`IRN`"  :label="`Iran, Islamic Republic of`"/>
    <el-option :value="`IRQ`"  :label="`Iraq`"/>
    <el-option :value="`IRL`"  :label="`Ireland`"/>
    <el-option :value="`IMN`"  :label="`Isle of Man`"/>
    <el-option :value="`ISR`"  :label="`Israel`"/>
    <el-option :value="`ITA`"  :label="`Italy`"/>
    <el-option :value="`JAM`"  :label="`Jamaica`"/>
    <el-option :value="`JPN`"  :label="`Japan`"/>
    <el-option :value="`JEY`"  :label="`Jersey`"/>
    <el-option :value="`JOR`"  :label="`Jordan`"/>
    <el-option :value="`KAZ`"  :label="`Kazakhstan`"/>
    <el-option :value="`KEN`"  :label="`Kenya`"/>
    <el-option :value="`KIR`"  :label="`Kiribati`"/>
    <el-option :value="`PRK`"  :label="`Korea, Democratic People's Republic of`"/>
    <el-option :value="`KOR`"  :label="`Korea, Republic of`"/>
    <el-option :value="`KWT`"  :label="`Kuwait`"/>
    <el-option :value="`KGZ`"  :label="`Kyrgyzstan`"/>
    <el-option :value="`LAO`"  :label="`Lao People's Democratic Republic`"/>
    <el-option :value="`LVA`"  :label="`Latvia`"/>
    <el-option :value="`LBN`"  :label="`Lebanon`"/>
    <el-option :value="`LSO`"  :label="`Lesotho`"/>
    <el-option :value="`LBR`"  :label="`Liberia`"/>
    <el-option :value="`LBY`"  :label="`Libya`"/>
    <el-option :value="`LIE`"  :label="`Liechtenstein`"/>
    <el-option :value="`LTU`"  :label="`Lithuania`"/>
    <el-option :value="`LUX`"  :label="`Luxembourg`"/>
    <el-option :value="`MAC`"  :label="`Macao`"/>
    <el-option :value="`MKD`"  :label="`Macedonia, the former Yugoslav Republic of`"/>
    <el-option :value="`MDG`"  :label="`Madagascar`"/>
    <el-option :value="`MWI`"  :label="`Malawi`"/>
    <el-option :value="`MYS`"  :label="`Malaysia`"/>
    <el-option :value="`MDV`"  :label="`Maldives`"/>
    <el-option :value="`MLI`"  :label="`Mali`"/>
    <el-option :value="`MLT`"  :label="`Malta`"/>
    <el-option :value="`MHL`"  :label="`Marshall Islands`"/>
    <el-option :value="`MTQ`"  :label="`Martinique`"/>
    <el-option :value="`MRT`"  :label="`Mauritania`"/>
    <el-option :value="`MUS`"  :label="`Mauritius`"/>
    <el-option :value="`MYT`"  :label="`Mayotte`"/>
    <el-option :value="`MEX`"  :label="`Mexico`"/>
    <el-option :value="`FSM`"  :label="`Micronesia, Federated States of`"/>
    <el-option :value="`MDA`"  :label="`Moldova, Republic of`"/>
    <el-option :value="`MCO`"  :label="`Monaco`"/>
    <el-option :value="`MNG`"  :label="`Mongolia`"/>
    <el-option :value="`MNE`"  :label="`Montenegro`"/>
    <el-option :value="`MSR`"  :label="`Montserrat`"/>
    <el-option :value="`MAR`"  :label="`Morocco`"/>
    <el-option :value="`MOZ`"  :label="`Mozambique`"/>
    <el-option :value="`MMR`"  :label="`Myanmar`"/>
    <el-option :value="`NAM`"  :label="`Namibia`"/>
    <el-option :value="`NRU`"  :label="`Nauru`"/>
    <el-option :value="`NPL`"  :label="`Nepal`"/>
    <el-option :value="`NLD`"  :label="`Netherlands`"/>
    <el-option :value="`NCL`"  :label="`New Caledonia`"/>
    <el-option :value="`NZL`"  :label="`New Zealand`"/>
    <el-option :value="`NIC`"  :label="`Nicaragua`"/>
    <el-option :value="`NER`"  :label="`Niger`"/>
    <el-option :value="`NGA`"  :label="`Nigeria`"/>
    <el-option :value="`NIU`"  :label="`Niue`"/>
    <el-option :value="`NFK`"  :label="`Norfolk Island`"/>
    <el-option :value="`MNP`"  :label="`Northern Mariana Islands`"/>
    <el-option :value="`NOR`"  :label="`Norway`"/>
    <el-option :value="`OMN`"  :label="`Oman`"/>
    <el-option :value="`PAK`"  :label="`Pakistan`"/>
    <el-option :value="`PLW`"  :label="`Palau`"/>
    <el-option :value="`PSE`"  :label="`Palestinian Territory, Occupied`"/>
    <el-option :value="`PAN`"  :label="`Panama`"/>
    <el-option :value="`PNG`"  :label="`Papua New Guinea`"/>
    <el-option :value="`PRY`"  :label="`Paraguay`"/>
    <el-option :value="`PER`"  :label="`Peru`"/>
    <el-option :value="`PHL`"  :label="`Philippines`"/>
    <el-option :value="`PCN`"  :label="`Pitcairn`"/>
    <el-option :value="`POL`"  :label="`Poland`"/>
    <el-option :value="`PRT`"  :label="`Portugal`"/>
    <el-option :value="`PRI`"  :label="`Puerto Rico`"/>
    <el-option :value="`QAT`"  :label="`Qatar`"/>
    <el-option :value="`REU`"  :label="`Réunion`"/>
    <el-option :value="`ROU`"  :label="`Romania`"/>
    <el-option :value="`RUS`"  :label="`Russian Federation`"/>
    <el-option :value="`RWA`"  :label="`Rwanda`"/>
    <el-option :value="`BLM`"  :label="`Saint Barthélemy`"/>
    <el-option :value="`SHN`"  :label="`Saint Helena, Ascension and Tristan da Cunha`"/>
    <el-option :value="`KNA`"  :label="`Saint Kitts and Nevis`"/>
    <el-option :value="`LCA`"  :label="`Saint Lucia`"/>
    <el-option :value="`MAF`"  :label="`Saint Martin (French part)`"/>
    <el-option :value="`SPM`"  :label="`Saint Pierre and Miquelon`"/>
    <el-option :value="`VCT`"  :label="`Saint Vincent and the Grenadines`"/>
    <el-option :value="`WSM`"  :label="`Samoa`"/>
    <el-option :value="`SMR`"  :label="`San Marino`"/>
    <el-option :value="`STP`"  :label="`Sao Tome and Principe`"/>
    <el-option :value="`SAU`"  :label="`Saudi Arabia`"/>
    <el-option :value="`SEN`"  :label="`Senegal`"/>
    <el-option :value="`SRB`"  :label="`Serbia`"/>
    <el-option :value="`SYC`"  :label="`Seychelles`"/>
    <el-option :value="`SLE`"  :label="`Sierra Leone`"/>
    <el-option :value="`SGP`"  :label="`Singapore`"/>
    <el-option :value="`SXM`"  :label="`Sint Maarten (Dutch part)`"/>
    <el-option :value="`SVK`"  :label="`Slovakia`"/>
    <el-option :value="`SVN`"  :label="`Slovenia`"/>
    <el-option :value="`SLB`"  :label="`Solomon Islands`"/>
    <el-option :value="`SOM`"  :label="`Somalia`"/>
    <el-option :value="`ZAF`"  :label="`South Africa`"/>
    <el-option :value="`SGS`"  :label="`South Georgia and the South Sandwich Islands`"/>
    <el-option :value="`SSD`"  :label="`South Sudan`"/>
    <el-option :value="`ESP`"  :label="`Spain`"/>
    <el-option :value="`LKA`"  :label="`Sri Lanka`"/>
    <el-option :value="`SDN`"  :label="`Sudan`"/>
    <el-option :value="`SUR`"  :label="`Suriname`"/>
    <el-option :value="`SJM`"  :label="`Svalbard and Jan Mayen`"/>
    <el-option :value="`SWZ`"  :label="`Swaziland`"/>
    <el-option :value="`SWE`"  :label="`Sweden`"/>
    <el-option :value="`CHE`"  :label="`Switzerland`"/>
    <el-option :value="`SYR`"  :label="`Syrian Arab Republic`"/>
    <el-option :value="`TWN`"  :label="`Taiwan, Province of China`"/>
    <el-option :value="`TJK`"  :label="`Tajikistan`"/>
    <el-option :value="`TZA`"  :label="`Tanzania, United Republic of`"/>
    <el-option :value="`THA`"  :label="`Thailand`"/>
    <el-option :value="`TLS`"  :label="`Timor-Leste`"/>
    <el-option :value="`TGO`"  :label="`Togo`"/>
    <el-option :value="`TKL`"  :label="`Tokelau`"/>
    <el-option :value="`TON`"  :label="`Tonga`"/>
    <el-option :value="`TTO`"  :label="`Trinidad and Tobago`"/>
    <el-option :value="`TUN`"  :label="`Tunisia`"/>
    <el-option :value="`TUR`"  :label="`Turkey`"/>
    <el-option :value="`TKM`"  :label="`Turkmenistan`"/>
    <el-option :value="`TCA`"  :label="`Turks and Caicos Islands`"/>
    <el-option :value="`TUV`"  :label="`Tuvalu`"/>
    <el-option :value="`UGA`"  :label="`Uganda`"/>
    <el-option :value="`UKR`"  :label="`Ukraine`"/>
    <el-option :value="`ARE`"  :label="`United Arab Emirates`"/>
    <el-option :value="`GBR`"  :label="`United Kingdom`"/>
    <el-option :value="`USA`"  :label="`United States`"/>
    <el-option :value="`UMI`"  :label="`United States Minor Outlying Islands`"/>
    <el-option :value="`URY`"  :label="`Uruguay`"/>
    <el-option :value="`UZB`"  :label="`Uzbekistan`"/>
    <el-option :value="`VUT`"  :label="`Vanuatu`"/>
    <el-option :value="`VEN`"  :label="`Venezuela, Bolivarian Republic of`"/>
    <el-option :value="`VNM`"  :label="`Viet Nam`"/>
    <el-option :value="`VGB`"  :label="`Virgin Islands, British`"/>
    <el-option :value="`VIR`"  :label="`Virgin Islands, U.S.`"/>
    <el-option :value="`WLF`"  :label="`Wallis and Futuna`"/>
    <el-option :value="`ESH`"  :label="`Western Sahara`"/>
    <el-option :value="`YEM`"  :label="`Yemen`"/>
    <el-option :value="`ZMB`"  :label="`Zambia`"/>
    <el-option :value="`ZWE`"  :label="`Zimbabwe`"/>
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    name: 'CountrySelect'
  })
export default class extends Vue {
    @Prop({ required: true }) private countryValue!: string
}
</script>
