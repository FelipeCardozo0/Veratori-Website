# Veratori — Ethical Inventory Management Platform

Veratori is a comprehensive inventory management platform for food retail and logistics. The system combines real-time AI object detection, multi-franchise management, mobile restock documentation, and advanced analytics to reduce food waste by up to 40% while optimizing space utilization and operational efficiency.

![Platform Overview](docs/images/platform-overview.png)

## Quick Links

- [Full Documentation](README.md)
- [Quick Start Guide](QUICKSTART.md)
- [Architecture Overview](ARCHITECTURE.md)
- [Mobile App Docs](Poke-Bowl---updated-January/veratori_restock_flutter/README.md)

## Key Features

- **Real-time AI Detection** - YOLO v8+ with GPU acceleration for accurate product identification
- **Multi-Franchise Dashboard** - Centralized executive control room for managing multiple locations
- **Mobile Restock App** - Flutter-based employee application for documenting restock actions
- **Advanced Analytics** - Trend analysis, forecasting, and operational intelligence
- **Automated Alerts** - Low-stock and expiration monitoring with real-time notifications
- **Sales Attribution** - Automatic sales detection and tracking

![Dashboard Preview](docs/images/dashboard-preview.png)

## Components

1. **Backend** - Python + aiohttp server with YOLO detection engine
2. **Web Dashboard** - Executive control room with real-time analytics
3. **Mobile App** - Flutter application for employee restock submissions
4. **Marketing Site** - Next.js marketing pages

## Installation

```bash
git clone https://github.com/FelipeCardozo0/Veratori.git
cd Veratori/Poke-Bowl---updated-January
pip3 install -r requirements.txt
cd backend && python3 main.py
```

Access the web dashboard at `http://localhost:8080`

## Mobile App

```bash
cd Poke-Bowl---updated-January/veratori_restock_flutter
flutter pub get
flutter run
```

![Mobile App Preview](docs/images/mobile-app-preview.png)

## Documentation

See [README.md](README.md) for complete documentation including architecture, API endpoints, configuration, and troubleshooting guides.
