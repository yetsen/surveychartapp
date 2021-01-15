import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import AboutModal from '@/core/aboutModal/about-modal.vue';
import BenefitForSmes from '@/core/benefitForSmes/benefit-for-smes.vue';
import TeamVideos from '@/core/teamVideos/team-videos.vue';
import ProjectDescription from '@/core/project-description/project-description.vue';

@Component({
  components: {
    aboutModal: AboutModal,
    benefitForSmes: BenefitForSmes,
    teamVideos: TeamVideos,
    projectDescription: ProjectDescription,
  },
})
export default class Home extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
