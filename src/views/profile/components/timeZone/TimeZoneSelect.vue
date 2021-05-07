<template>
  <el-select v-model="timeZoneValue">
    <el-option :value="Pacific/Kiritimati" :label="`(GMT+14:00) Line Islands Time (Pacific/Kiritimati)`"></el-option>
    <el-option :value="Pacific/Chatham" :label="`(GMT+13:45) Chatham Daylight Time (Pacific/Chatham)`"></el-option>
    <el-option :value="Pacific/Auckland" :label="`(GMT+13:00) New Zealand Daylight Time (Pacific/Auckland)`"></el-option>
    <el-option :value="Pacific/Enderbury" :label="`(GMT+13:00) Phoenix Islands Time (Pacific/Enderbury)`"></el-option>
    <el-option :value="Pacific/Tongatapu" :label="`(GMT+13:00) Tonga Time (Pacific/Tongatapu)`"></el-option>
    <el-option :value="Asia/Kamchatka" :label="`(GMT+12:00) Magadan Time (Asia/Kamchatka)`"></el-option>
    <el-option :value="Pacific/Fiji" :label="`(GMT+12:00) Fiji Time (Pacific/Fiji)`"></el-option>
    <el-option :value="Pacific/Norfolk" :label="`(GMT+11:30) Norfolk Islands Time (Pacific/Norfolk)`"></el-option>
    <el-option :value="`Australia/Lord_Howe`" :label="`(GMT+11:00) Lord Howe Daylight Time (Australia/Lord_Howe)`"></el-option>
    <el-option :value="Australia/Sydney" :label="`(GMT+11:00) Australian Eastern Daylight Time (Australia/Sydney)`"></el-option>
    <el-option :value="Pacific/Guadalcanal" :label="`(GMT+11:00) Solomon Islands Time (Pacific/Guadalcanal)`"></el-option>
    <el-option :value="Australia/Adelaide" :label="`(GMT+10:30) Australian Central Daylight Time (Australia/Adelaide)`"></el-option>
    <el-option :value="Australia/Brisbane" :label="`(GMT+10:00) Australian Eastern Standard Time (Australia/Brisbane)`"></el-option>
    <el-option :value="Australia/Darwin" :label="`(GMT+09:30) Australian Central Standard Time (Australia/Darwin)`"></el-option>
    <el-option :value="Asia/Seoul" :label="`(GMT+09:00) Korean Standard Time (Asia/Seoul)`"></el-option>
    <el-option :value="Asia/Tokyo" :label="`(GMT+09:00) Japan Standard Time (Asia/Tokyo)`"></el-option>
    <el-option :value="`Asia/Hong_Kong`" :label="`(GMT+08:00) Hong Kong Time (Asia/Hong_Kong)`"></el-option>
    <el-option :value="`Asia/Kuala_Lumpur`" :label="`(GMT+08:00) Malaysia Time (Asia/Kuala_Lumpur)`"></el-option>
    <el-option :value="Asia/Manila" :label="`(GMT+08:00) Philippine Time (Asia/Manila)`"></el-option>
    <el-option :value="Asia/Shanghai" :label="`(GMT+08:00) China Standard Time (Asia/Shanghai)`"></el-option>
    <el-option :value="Asia/Singapore" :label="`(GMT+08:00) Singapore Standard Time (Asia/Singapore)`"></el-option>
    <el-option :value="Asia/Taipei" :label="`(GMT+08:00) Taipei Standard Time (Asia/Taipei)`"></el-option>
    <el-option :value="Australia/Perth" :label="`(GMT+08:00) Australian Western Standard Time (Australia/Perth)`"></el-option>
    <el-option :value="Asia/Bangkok" :label="`(GMT+07:00) Indochina Time (Asia/Bangkok)`"></el-option>
    <el-option :value="`Asia/Ho_Chi_Minh`" :label="`(GMT+07:00) Indochina Time (Asia/Ho_Chi_Minh)`"></el-option>
    <el-option :value="Asia/Jakarta" :label="`(GMT+07:00) Western Indonesia Time (Asia/Jakarta)`"></el-option>
    <el-option :value="Asia/Rangoon" :label="`(GMT+06:30) Myanmar Time (Asia/Rangoon)`"></el-option>
    <el-option :value="Asia/Dhaka" :label="`(GMT+06:00) Bangladesh Time (Asia/Dhaka)`"></el-option>
    <el-option :value="Asia/Yekaterinburg" :label="`(GMT+06:00) Yekaterinburg Time (Asia/Yekaterinburg)`"></el-option>
    <el-option :value="Asia/Kathmandu" :label="`(GMT+05:45) Nepal Time (Asia/Kathmandu)`"></el-option>
    <el-option :value="Asia/Colombo" :label="`(GMT+05:30) India Standard Time (Asia/Colombo)`"></el-option>
    <el-option :value="Asia/Kolkata" :label="`(GMT+05:30) India Standard Time (Asia/Kolkata)`"></el-option>
    <el-option :value="Asia/Baku" :label="`(GMT+05:00) Azerbaijan Summer Time (Asia/Baku)`"></el-option>
    <el-option :value="Asia/Karachi" :label="`(GMT+05:00) Pakistan Time (Asia/Karachi)`"></el-option>
    <el-option :value="Asia/Tashkent" :label="`(GMT+05:00) Uzbekistan Time (Asia/Tashkent)`"></el-option>
    <el-option :value="Asia/Kabul" :label="`(GMT+04:30) Afghanistan Time (Asia/Kabul)`"></el-option>
    <el-option :value="Asia/Dubai" :label="`(GMT+04:00) Gulf Standard Time (Asia/Dubai)`"></el-option>
    <el-option :value="Asia/Tbilisi" :label="`(GMT+04:00) Georgia Time (Asia/Tbilisi)`"></el-option>
    <el-option :value="Asia/Yerevan" :label="`(GMT+04:00) Armenia Time (Asia/Yerevan)`"></el-option>
    <el-option :value="Europe/Moscow" :label="`(GMT+04:00) Moscow Standard Time (Europe/Moscow)`"></el-option>
    <el-option :value="Asia/Tehran" :label="`(GMT+03:30) Iran Standard Time (Asia/Tehran)`"></el-option>
    <el-option :value="Africa/Nairobi" :label="`(GMT+03:00) East Africa Time (Africa/Nairobi)`"></el-option>
    <el-option :value="Asia/Baghdad" :label="`(GMT+03:00) Arabian Standard Time (Asia/Baghdad)`"></el-option>
    <el-option :value="Asia/Beirut" :label="`(GMT+03:00) Eastern European Summer Time (Asia/Beirut)`"></el-option>
    <el-option :value="Asia/Jerusalem" :label="`(GMT+03:00) Israel Daylight Time (Asia/Jerusalem)`"></el-option>
    <el-option :value="Asia/Kuwait" :label="`(GMT+03:00) Arabian Standard Time (Asia/Kuwait)`"></el-option>
    <el-option :value="Asia/Riyadh" :label="`(GMT+03:00) Arabian Standard Time (Asia/Riyadh)`"></el-option>
    <el-option :value="Europe/Athens" :label="`(GMT+03:00) Eastern European Summer Time (Europe/Athens)`"></el-option>
    <el-option :value="Europe/Bucharest" :label="`(GMT+03:00) Eastern European Summer Time (Europe/Bucharest)`"></el-option>
    <el-option :value="Europe/Helsinki" :label="`(GMT+03:00) Eastern European Summer Time (Europe/Helsinki)`"></el-option>
    <el-option :value="Europe/Istanbul" :label="`(GMT+03:00) Eastern European Summer Time (Europe/Istanbul)`"></el-option>
    <el-option :value="Europe/Minsk" :label="`(GMT+03:00) Further-eastern European Time (Europe/Minsk)`"></el-option>
    <el-option :value="Africa/Cairo" :label="`(GMT+02:00) Eastern European Time (Africa/Cairo)`"></el-option>
    <el-option :value="Africa/Johannesburg" :label="`(GMT+02:00) South Africa Standard Time (Africa/Johannesburg)`"></el-option>
    <el-option :value="Europe/Amsterdam" :label="`(GMT+02:00) Central European Summer Time (Europe/Amsterdam)`"></el-option>
    <el-option :value="Europe/Berlin" :label="`(GMT+02:00) Central European Summer Time (Europe/Berlin)`"></el-option>
    <el-option :value="Europe/Brussels" :label="`(GMT+02:00) Central European Summer Time (Europe/Brussels)`"></el-option>
    <el-option :value="Europe/Paris" :label="`(GMT+02:00) Central European Summer Time (Europe/Paris)`"></el-option>
    <el-option :value="Europe/Prague" :label="`(GMT+02:00) Central European Summer Time (Europe/Prague)`"></el-option>
    <el-option :value="Europe/Rome" :label="`(GMT+02:00) Central European Summer Time (Europe/Rome)`"></el-option>
    <el-option :value="Africa/Algiers" :label="`(GMT+01:00) Central European Time (Africa/Algiers)`"></el-option>
    <el-option :value="Europe/Dublin" :label="`(GMT+01:00) Irish Summer Time (Europe/Dublin)`"></el-option>
    <el-option :value="Europe/Lisbon" :label="`(GMT+01:00) Western European Summer Time (Europe/Lisbon)`"></el-option>
    <el-option :value="Europe/London" :label="`(GMT+01:00) British Summer Time (Europe/London)`"></el-option>
    <el-option :value="Africa/Casablanca" :label="`(GMT+00:00) Western European Time (Africa/Casablanca)`"></el-option>
    <el-option :value="America/Scoresbysund" :label="`(GMT+00:00) East Greenland Summer Time (America/Scoresbysund)`"></el-option>
    <el-option :value="Atlantic/Azores" :label="`(GMT+00:00) Azores Summer Time (Atlantic/Azores)`"></el-option>
    <el-option :value="GMT" :label="`(GMT+00:00) Greenwich Mean Time (GMT)`"></el-option>
    <el-option :value="`Atlantic/Cape_Verde`" :label="`(GMT-01:00) Cape Verde Time (Atlantic/Cape_Verde)`"></el-option>
    <el-option :value="`Atlantic/South_Georgia`" :label="`(GMT-02:00) South Georgia Time (Atlantic/South_Georgia)`"></el-option>
    <el-option :value="`America/St_Johns`" :label="`(GMT-02:30) Newfoundland Daylight Time (America/St_Johns)`"></el-option>
    <el-option :value="`America/Argentina/Buenos_Aires`" :label="`(GMT-03:00) Argentina Time (America/Argentina/Buenos_Aires)`">
    </el-option>
    <el-option :value="America/Halifax" :label="`(GMT-03:00) Atlantic Daylight Time (America/Halifax)`"></el-option>
    <el-option :value="America/Santiago" :label="`(GMT-03:00) Chile Summer Time (America/Santiago)`"></el-option>
    <el-option :value="`America/Sao_Paulo`" :label="`(GMT-03:00) Brasilia Time (America/Sao_Paulo)`"></el-option>
    <el-option :value="Atlantic/Bermuda" :label="`(GMT-03:00) Atlantic Daylight Time (Atlantic/Bermuda)`"></el-option>
    <el-option :value="America/Indiana/Indianapolis" :label="`(GMT-04:00) Eastern Daylight Time (America/Indiana/Indianapolis)`">
    </el-option>
    <el-option :value="`America/New_York`" :label="`(GMT-04:00) Eastern Daylight Time (America/New_York)`"></el-option>
    <el-option :value="`America/Puerto_Rico`" :label="`(GMT-04:00) Atlantic Standard Time (America/Puerto_Rico)`"></el-option>
    <el-option :value="America/Caracas" :label="`(GMT-04:30) Venezuela Time (America/Caracas)`"></el-option>
    <el-option :value="America/Bogota" :label="`(GMT-05:00) Colombia Time (America/Bogota)`"></el-option>
    <el-option :value="America/Chicago" :label="`(GMT-05:00) Central Daylight Time (America/Chicago)`"></el-option>
    <el-option :value="America/Lima" :label="`(GMT-05:00) Peru Time (America/Lima)`"></el-option>
    <el-option :value="`America/Mexico_City`" :label="`(GMT-05:00) Central Daylight Time (America/Mexico_City)`"></el-option>
    <el-option :value="America/Panama" :label="`(GMT-05:00) Eastern Standard Time (America/Panama)`"></el-option>
    <el-option :value="America/Denver" :label="`(GMT-06:00) Mountain Daylight Time (America/Denver)`"></el-option>
    <el-option :value="`America/El_Salvador`" :label="`(GMT-06:00) Central Standard Time (America/El_Salvador)`"></el-option>
    <el-option :value="America/Mazatlan" :label="`(GMT-06:00) Mountain Daylight Time (America/Mazatlan)`"></el-option>
    <el-option :value="`America/Los_Angeles`" :label="`(GMT-07:00) Pacific Daylight Time (America/Los_Angeles)`"></el-option>
    <el-option :value="America/Phoenix" :label="`(GMT-07:00) Mountain Standard Time (America/Phoenix)`"></el-option>
    <el-option :value="America/Tijuana" :label="`(GMT-07:00) Pacific Daylight Time (America/Tijuana)`"></el-option>
    <el-option :value="America/Anchorage" :label="`(GMT-08:00) Alaska Daylight Time (America/Anchorage)`"></el-option>
    <el-option :value="Pacific/Pitcairn" :label="`(GMT-08:00) Pitcairn Time (Pacific/Pitcairn)`"></el-option>
    <el-option :value="America/Adak" :label="`(GMT-09:00) Hawaii-Aleutian Standard Time (America/Adak)`"></el-option>
    <el-option :value="Pacific/Gambier" :label="`(GMT-09:00) Gambier Time (Pacific/Gambier)`"></el-option>
    <el-option :value="Pacific/Marquesas" :label="`(GMT-09:30) Marquesas Time (Pacific/Marquesas)`"></el-option>
    <el-option :value="Pacific/Honolulu" :label="`(GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Honolulu)`"></el-option>
    <el-option :value="Pacific/Niue" :label="`(GMT-11:00) Niue Time (Pacific/Niue)`"></el-option>
    <el-option :value="`Pacific/Pago_Pago`" :label="`(GMT-11:00) Samoa Standard Time (Pacific/Pago_Pago)`"></el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    name: 'TimeZoneSelect'
  })
export default class extends Vue {
    @Prop({ required: true }) private timeZoneValue!: string
}
</script>
