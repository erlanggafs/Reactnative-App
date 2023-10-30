import { SettingsScreen } from "react-native-settings-screen";

const data: SettingsScreen = [
    { type: 'CUSTOM_VIEW', key: 'hero', render: this.renderHero },
    {
        type: 'SECTION',
        header: 'My Section'.toUpperCase(),
        footer: 'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
        rows: [
            {
                title: 'A row',
                showDisclosureIndicator: true,
            },
            { title: 'A non-tappable row' },
            {
                title: 'This row has a',
                subtitle: 'Subtitle',
                showDisclosureIndicator: true,
            },
            {
                title: 'Long title. So long long long long long long long',
                subtitle: 'And so is the subtitle. Even longer longer longer longer longer',
            },
            {
                title: 'Switch',
                renderAccessory: () => <Switch value onValueChange={() => { }} />,
            },
            {
                title: 'Text',
                renderAccessory: () => (
                    <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                        Maybe
                    </Text>
                ),
            },
            {
                title: 'Custom view',
                renderAccessory: () => (
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'blue',
                        }} />
                ),
                showDisclosureIndicator: true,
            },
        ],
    },
    {
        type: 'SECTION',
        header: 'My Other Section'.toUpperCase(),
        rows: [
            {
                title: 'Dolor Nullam',
                showDisclosureIndicator: true,
            },
            {
                title: 'Nulla vitae elit libero',
                renderAccessory: () => (
                    <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                        Dapibus
                    </Text>
                ),
            },
            {
                title: 'Ipsum Lorem Venenatis',
                subtitle: 'Vestibulum Inceptos Fusce Justo',
                renderAccessory: () => (
                    <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                        Yes
                    </Text>
                ),
                showDisclosureIndicator: true,
            },
            {
                title: 'Cras Euismod',
                renderAccessory: () => (
                    <Icon
                        style={{ marginTop: 3, marginRight: 6 }}
                        name="colours"
                        size={32}
                        color="black" />
                ),
                showDisclosureIndicator: true,
            },
        ],
    },
    {
        type: 'SECTION',
        header: 'My Third Section'.toUpperCase(),
        rows: [
            {
                title: 'Different title style',
                showDisclosureIndicator: true,
                titleStyle: {
                    color: 'red',
                },
            },
        ],
    },
    {
        type: 'CUSTOM_VIEW',
        render: () => (
            <Text
                style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: '#999',
                    marginBottom: 40,
                    marginTop: -30,
                    fontFamily,
                }}
            >
                v1.2.3
            </Text>
        ),
    },
];
