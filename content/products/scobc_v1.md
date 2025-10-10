+++
title = "SC-OBC MODULE V1"
description = "On-board Computer for Cubesat"

[extra]
prefooter_cards = ["recruit/_index.md", "investor-relations/_index.md", "contact/_index.md"]
+++

{{ quick_jump(
	title1="Product Overview", id1="section-summary",
	title2="Use Cases", id2="section-usage",
	title3="Specifications", id3="section-specs",
	title4="Dev Kit", id4="section-devkit",
	title5="Docs / Resources", id5="section-docs"
) }}

<section id="section-summary">

{{ section_title(title="PRODUCT", subtitle="", slogan="") }}

{% product_overview(img="sc-obc_module_v1.png", alt="", title="SC-OBC Module V1", subtitle="高性能・高信頼性 次世代宇宙用コンピュータモジュール") %}

CPU・FPGA・AI Engineを統合したヘテロジニアスプラットフォームコンピューティング (Adaptive SoC)を採用した AMD Versalを搭載する高性能オンボードコンピュータです。光学センサーや SAR・LiDARなどから入力される大容量のセンサーデータに対し、入力処理・ハードウェアアクセサレーションやベクトル演算を伴うエッジ処理、大容量ストレージへの記録を、効率的に実行することができます。

{% end %}

<section id="section-usage">
	{{ section_title(title="USES CASES", subtitle="", slogan="") }}
</section>

{{ twocard(
	title="",
	subtitle="",

	left_card_image="test_space_jinkoueisei.png",
	right_card_image="test_space04_moon.png",

	left_card_title="",
	left_card_subtitle="地球観測用センサ（SAR, LiDAR）の<br> 高速データ処理",

	right_card_title="",
	right_card_subtitle="地球周回衛星、静止軌道衛星、<br> 月周回・着陸・探査ミッション",
	bg=""
) }}

<section id="section-specs">
	{% spec_sheet(
		bg="",
		title="SPECS",
		subtitle="",
		slogan=""
	) %}
	Main Processor | AMD Versal AI Edge Series VE2302
	Communication Interface | Gigabit EtherMAC, USB2.0 (ULPI), UART, I2C, SPI, GPIO, CAN FD, SD/eMMC
	Main CPU | Cortex-A72 / Cortex-R5F / Microchip IGLOO2
	FPGA User I/O | 
	Preinstalled OS | Zephyr RTOS
	PIC User I/O | 
	Clock Generator | 
	Watchdog timer | 
	PIC (anomaly detection / system recovery) | 
	Interface Connector | 
	On-chip SRAM | 
	Supply Voltage | DC 5.0 V
	On-board SRAM | 
	Power Consumption | 
	NOR Flash Memory | 64MByte (Redundancy) 
	External Dimensions | 100mm × 150mm
	FeRAM | 1MByte × 2
	Mass | 
	{% end %}
</section>

{{ section_title(title="PRICE", subtitle="", slogan="") }}

{% price(price_title="SC-OBC Module V1", price_number="xx", price_unit="万円(税別)", price_note="2026年春発売予定") %}
SC-OBC Module V1（以下、「本製品」と表記します）は自社開発衛星による宇宙実証を予定しております。本価格は宇宙実証までの期間限定の特別価格となります。特別価格が適用される条件は以下のとおりです。

- 本製品を購入いただいたことを弊社ホームページやSNS等で公開することを許諾いただきます。
- 本製品を使用した機器を宇宙へ打上げた実績、あるいは地上産業において使用された実績を弊社ホームページやSNS等で公開することを許諾いただきます。
- 本製品を宇宙で使用した際の運用データを提供いただきます（データは公開いたしません。また、今後の製品仕様へのフィードバックが目的のため、本製品の機能性能に関わるデータのみの提供を希望しております。データ提供の範囲や提供方法など、ご不明な点がございましたらお問合せ下さい。）
- 本製品の使い勝手や仕様への要望等についてアンケートにご協力いただく場合がございます。
{% end %}

{% price_supp(title="インタフェースボード受託開発") %}
SC-OBC Module V1と衛星を接続するための基板開発を受託します。

詳しくは [お問い合わせフォーム](/contact) よりお問い合わせください。
{% end %}

<section id="section-devkit">
	{{ section_title(bg="", title="DEV KIT", subtitle="", slogan="") }}
</section>

{{ twocard(
	title="",
	subtitle="",
	left_card_image="dev-board.webp",
	right_card_image="under_construction.jpeg",
	left_card_title="開発キット",
	left_card_subtitle="coming soon",
	right_card_title="オプション品",
	right_card_subtitle="coming soon",
	bg=""
) }}

<section id="section-docs">
	{% docs_resources(
		bg="",
		title="DOCS",
		subtitle="",
		slogan=""
	) %}
	GitHub | その他、様々な技術情報はこちらを参照ください。 | https://github.com/spacecubics
	{% end %}
</section>
