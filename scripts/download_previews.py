import os
import urllib.request

base_dir = "F:/preview/motionsites-assets"
subdirs = ["hero", "footer", "features", "landing", "cta", "logos", "misc"]

for subdir in subdirs:
    os.makedirs(os.path.join(base_dir, subdir), exist_ok=True)

items = [
    "https://motionsites.ai/assets/hero-nexacore-preview-DtWEu8_f.gif|hero-nexacore.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif|hero-orbit-web3.gif",
    "https://motionsites.ai/assets/hero-aetheris-voyage-preview-BGJn1z4t.gif|hero-aetheris-voyage.gif",
    "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif|hero-portfolio-cosmic.gif",
    "https://motionsites.ai/assets/footer-zenith-preview-CYxIE6aF.gif|footer-zenith.gif",
    "https://motionsites.ai/assets/motionsites-logo-D88wrm0L.png|motionsites-logo.png",
    "https://motionsites.ai/assets/hero-impressive-preview-BCJtlSs2.gif|hero-impressive.gif",
    "https://motionsites.ai/assets/hero-clubx-preview-CpKCe8yV.gif|hero-clubx.gif",
    "https://motionsites.ai/assets/hero-nike-premium-landing-preview-_VyIBlIe.gif|hero-nike-premium-landing.gif",
    "https://motionsites.ai/assets/slate-hero-BY-9TCfd.gif|hero-slate.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif|hero-vitara.gif",
    "https://motionsites.ai/assets/hero-neuralyn-preview-Br4FRDQA.gif|hero-neuralyn.gif",
    "https://motionsites.ai/assets/hero-loader-animation-preview-C3_SX_Io.gif|hero-loader-animation.gif",
    "https://motionsites.ai/assets/hero-vertex-ai-preview-Da80y3xa.gif|hero-vertex-ai.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif|hero-evr-ventures.gif",
    "https://motionsites.ai/assets/hero-nexar-preview-Dk7ThCat.gif|hero-nexar.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif|hero-skyelite.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif|hero-vex-ventures.gif",
    "https://image.mux.com/ehPIuMBxzv1o1npbn92tO6tndB01L3uFuFD01q6f5PfiY/animated.webp?width=640&fps=15|landing-cinematic.webp",
    "https://motionsites.ai/assets/footer-vize-poster-BRRRDP-A.png|footer-vize.png",
    "https://motionsites.ai/assets/hero-vortex-studio-preview-BQyvwopD.gif|hero-ai-designer-portfolio.gif",
    "https://motionsites.ai/assets/hero-bionova-preview-Sk76d0_D.gif|hero-bionova.gif",
    "https://motionsites.ai/assets/hero-power-ai-preview-BqpSbx41.gif|hero-power-ai.gif",
    "https://motionsites.ai/assets/hero-slam-dunk-preview-Cmg3K_S4.gif|hero-slam-dunk.gif",
    "https://motionsites.ai/assets/footer-haul-poster-Do5X7frB.png|footer-haul.png",
    "https://motionsites.ai/assets/hero-prisma-preview-D4QeI0Bn.gif|hero-prisma.gif",
    "https://motionsites.ai/assets/hero-design-rocket-email-preview-DBed7Yfk.gif|hero-email-marketing.gif",
    "https://motionsites.ai/assets/hero-package-fits-pricing-preview-Bglk5DXD.gif|hero-package-fits-pricing.gif",
    "https://motionsites.ai/assets/hero-rivr-preview-DcS3pjx4.gif|hero-rivr.gif",
    "https://motionsites.ai/assets/features-benefits-preview-DO4ULagO.gif|features-benefits.gif",
    "https://motionsites.ai/assets/hero-digital-reality-preview-BogjTXUi.gif|hero-digital-reality.gif",
    "https://motionsites.ai/assets/features-keep-ahead-poster-CriEHu8p.png|features-keep-ahead.png",
    "https://motionsites.ai/assets/hero-securify-preview-DQSYrftH.gif|hero-securify.gif",
    "https://motionsites.ai/assets/hero-wisa-space-preview-CAIFtU8c.gif|hero-wisa-space.gif",
    "https://motionsites.ai/assets/hero-clearinvoice-preview-l3q8sam6.gif|hero-clearinvoice.gif",
    "https://motionsites.ai/assets/motionsites-logo-light-BXmSBetN.png|motionsites-logo-light.png",
    "https://motionsites.ai/assets/hero-portfolio-bold-preview-9Yfbi-Wg.gif|hero-portfolio-bold.gif",
    "https://motionsites.ai/assets/hero-pro-ai-deck-preview-BBbLJNeM.gif|hero-pro-ai-deck.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif|hero-terra.gif",
    "https://motionsites.ai/assets/hero-logoisum-preview-yhpSc7Yy.gif|hero-logoisum.gif",
    "https://motionsites.ai/assets/hero-hr-saas-preview-Cf365Y1O.gif|hero-hr-saas.gif",
    "https://motionsites.ai/assets/hero-nova-space-preview-ej0OOJ0M.gif|hero-nova-space.gif",
    "https://motionsites.ai/assets/hero-viktor-portfolio-preview-Bd2-Dg_u.gif|hero-viktor-portfolio.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif|hero-wealth.gif",
    "https://motionsites.ai/assets/hero-glassmorphism-agency-preview-CGqeRoqP.gif|hero-glassmorphism-agency.gif",
    "https://motionsites.ai/assets/hero-flowmate-preview-BmYI3ZvH.gif|hero-flowmate.gif",
    "https://motionsites.ai/assets/hero-mindloop-preview-BR8xW6xW.gif|hero-mindloop.gif",
    "https://motionsites.ai/assets/hero-digitwist-preview-s2pJetjQ.gif|hero-digitwist.gif",
    "https://motionsites.ai/assets/hero-nexus-preview-74RfhYpA.gif|hero-nexus.gif",
    "https://motionsites.ai/assets/features-glow-poster-CmUBaPAq.png|features-glow.png",
    "https://motionsites.ai/assets/hero-datacore-booking-preview-B3t9SRK6.gif|hero-datacore-booking.gif",
    "https://motionsites.ai/assets/dot-hero-Csf49OgS.gif|hero-dot.gif",
    "https://motionsites.ai/assets/hero-nexora-features-preview-D26X0IiD.gif|hero-nexora-features.gif",
    "https://motionsites.ai/assets/hero-datacore-preview-DWeq7Ls3.gif|hero-datacore.gif",
    "https://motionsites.ai/assets/halo-usd-hero-CtMXOklk.gif|hero-usd-halo.gif",
    "https://motionsites.ai/assets/hero-yacht-club-preview-BXyoIjIf.gif|hero-yacht-club.gif",
    "https://motionsites.ai/assets/hero-deck-preview-CbidQJxW.gif|hero-investor-deck.gif",
    "https://motionsites.ai/assets/hero-shamoni-preview-DfbPWZl9.gif|hero-shamoni.gif",
    "https://motionsites.ai/assets/hero-buzzentic-preview-CbopM29R.gif|hero-buzzentic.gif",
    "https://motionsites.ai/assets/hero-guardnet-preview-DAQqiNXC.gif|hero-guardnet.gif",
    "https://motionsites.ai/assets/hero-liquid-glass-agency-preview-Cr5Q9-lc.gif|hero-liquid-glass-agency.gif",
    "https://motionsites.ai/assets/hero-nickel-preview-CnRoBZt5.gif|hero-nickel.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif|hero-designpro.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif|hero-transform-data.gif",
    "https://motionsites.ai/assets/cta-community-preview-C90X-RHI.gif|cta-community.gif",
    "https://motionsites.ai/assets/hero-duolingo-styleguide-preview-1HTxQ6Tj.gif|hero-duolingo-styleguide.gif",
    "https://motionsites.ai/assets/hero-akor-security-preview-hRrwsPNf.gif|hero-akor-security.gif",
    "https://motionsites.ai/assets/hero-railroad-ai-preview-CBjplU90.gif|hero-railroad-ai.gif",
    "https://motionsites.ai/assets/hero-ai-designer-agency-preview-vrAje6Od.gif|hero-ai-designer-agency.gif",
    "https://motionsites.ai/assets/hero-portal-preview-DEscBr2T.gif|hero-portal.gif",
    "https://motionsites.ai/assets/hero-ecovolta-v2-preview-D8IVEFGK.gif|hero-ecovolta-v2.gif",
    "https://motionsites.ai/assets/hero-portfolio-dark-preview-RZYzJHIL.gif|hero-portfolio-dark.gif",
    "https://motionsites.ai/assets/convix-software-hero-B6-tdnN6.gif|hero-convix-software.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif|hero-codenest.gif",
    "https://motionsites.ai/assets/hero-price-calculator-preview-Dak8DDgY.gif|hero-price-calculator.gif",
    "https://motionsites.ai/assets/design-rocket-logo-B1H_9X4w.png|design-rocket-logo.png",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif|hero-asme.gif",
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif|hero-space-voyage.gif",
    "https://motionsites.ai/assets/hero-targo-preview-BF9qQyMr.gif|hero-targo.gif",
    "https://image.mux.com/iK2ACd5wEwi7ORN8i16kl59Cck01IREnB3hX6EnnqiUk/animated.webp?width=640&fps=15|hero-ember-dsgn.webp",
    "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif|hero-automation-machines.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif|hero-xportfolio.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif|hero-nexora.gif",
    "https://motionsites.ai/assets/hero-synapse-preview-CP83ds5W.gif|hero-synapse-dark.gif",
    "https://motionsites.ai/assets/landing-rivr-defi-preview-BPVSgEtB.gif|landing-rivr-defi.gif",
    "https://motionsites.ai/assets/hero-sentinel-ai-preview-BXas7Q1_.gif|hero-sentinel-ai.gif",
    "https://motionsites.ai/assets/footer-lumina-preview-CYkr-ACN.gif|footer-lumina.gif",
    "https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif|hero-grow-ai.gif",
    "https://motionsites.ai/assets/hero-neovision-preview-qwRNOas1.gif|hero-neovision.gif",
    "https://motionsites.ai/assets/hero-taskora-preview-BlRBv8IU.gif|hero-taskora.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif|hero-sync-ai.gif",
    "https://motionsites.ai/assets/hero-weblex-preview-BoIbrUHI.gif|hero-weblex-dark.gif",
    "https://motionsites.ai/assets/hero-apex-saas-preview-CbnBKSPv.gif|hero-apex-saas.gif",
    "https://motionsites.ai/assets/hero-bloom-ai-preview-g6RcYLTl.gif|hero-bloom-ai.gif",
    "https://motionsites.ai/assets/hero-ecovolta-preview-BXrSPAWj.gif|hero-ecovolta.gif",
    "https://motionsites.ai/assets/hero-crypto-wealth-preview-Cv79y7eb.gif|hero-crypto-wealth.gif",
    "https://motionsites.ai/assets/footer-kresna-preview-BrIYYd2q.gif|footer-kresna.gif",
    "https://motionsites.ai/assets/hero-acreage-farming-preview-DY4bc7ni.gif|hero-acreage-farming.gif",
    "https://motionsites.ai/assets/hero-orbis-nft-preview-C3wvh77a.gif|hero-orbis-nft.gif",
    "https://motionsites.ai/assets/hero-mindloop-landing-preview-Bqnstohr.gif|hero-mindloop-landing.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif|hero-planet-orbit.gif",
    "https://motionsites.ai/assets/landing-zenith-realty-preview-Y1uTjYYl.gif|landing-zenith-realty.gif",
    "https://motionsites.ai/assets/hero-orbit-engineers-poster-BT1ffUzn.png|hero-orbit-engineers.png",
    "https://motionsites.ai/assets/codercrest-hero-CoycO52t.gif|hero-codercrest.gif",
    "https://motionsites.ai/assets/hero-focus-ai-preview-Bnad3D1L.gif|hero-focus-ai.gif",
    "https://motionsites.ai/assets/hero-digital-epoch-preview-B85ezqXO.gif|hero-digital-epoch.gif",
    "https://motionsites.ai/assets/hero-framelix-preview-DsyIImVY.gif|hero-framelix.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif|hero-luminex.gif",
    "https://motionsites.ai/assets/promo-preview-CjVbw2gq.png|promo-design-rocket.png",
    "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif|hero-finlytic.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif|hero-new-era-bold.gif",
    "https://motionsites.ai/assets/hero-synapse-ai-preview-BjBuH68i.gif|hero-synapse-ai.gif",
    "https://motionsites.ai/assets/hero-new-era-auto-preview-W56vp0xD.gif|hero-new-era-auto.gif",
    "https://motionsites.ai/assets/hero-prioritize-preview-DlI3SYr4.png|hero-prioritize.png",
    "https://motionsites.ai/assets/hero-ecommerce-website-preview-D7j_TrNR.gif|hero-ecommerce-website.gif",
    "https://motionsites.ai/assets/hero-innovation-preview-BerBJHh1.gif|hero-innovation.gif",
    "https://motionsites.ai/assets/hero-web3-eos-poster-DF0_WdVS.png|hero-web3-eos.png",
    "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif|hero-velorah.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif|hero-stellar-ai.gif",
    "https://motionsites.ai/assets/bolt-logo-DmqWnv7f.png|bolt-logo.png",
    "https://motionsites.ai/assets/hero-taskly-preview-Dq2MKaI0.gif|hero-taskly.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif|hero-aethera.gif",
    "https://motionsites.ai/assets/hero-veloce-finance-preview-DQW35gIt.gif|hero-veloce-finance.gif"
]

ok = 0
fail = 0

req = urllib.request.build_opener()
req.addheaders = [('User-agent', 'Mozilla/5.0')]

for item in items:
    url, name = item.split('|')
    if name.startswith("hero-"):
        d = "hero"
    elif name.startswith("footer-"):
        d = "footer"
    elif name.startswith("features-"):
        d = "features"
    elif name.startswith("landing-"):
        d = "landing"
    elif name.startswith("cta-"):
        d = "cta"
    elif "logo" in name:
        d = "logos"
    else:
        d = "misc"
        
    out_path = os.path.join(base_dir, d, name)
    try:
        urllib.request.install_opener(req)
        urllib.request.urlretrieve(url, out_path)
        ok += 1
        print(f"  OK   [{d:<9}] {name}")
    except Exception as e:
        fail += 1
        print(f"  FAIL [{d:<9}] {name} <- {url} ({e})")

print("-" * 40)
print(f"Downloaded: {ok}   Failed: {fail}   Total: {len(items)}")
